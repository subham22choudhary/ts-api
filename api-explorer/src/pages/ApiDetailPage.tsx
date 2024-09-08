import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ApiDetails from '../components/ApiDetails';

const ApiDetailPage: React.FC = () => {
    const { provider } = useParams<{ provider: string }>();
    const [apiDetails, setApiDetails] = useState<any>(null);
    const [description, setDescription] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchApiDetails = async () => {
            try {
                const url = `https://api.apis.guru/v2/${provider}.json`;
                console.log('Fetching data from URL:', url);

                const response = await axios.get(url);
                console.log('APIs fetched:', response.data);

                setApiDetails(response.data);

                const providerDetails = response.data.apis?.[provider];
                console.log('Provider Details:', providerDetails);

                if (providerDetails && providerDetails.info) {

                    setDescription(providerDetails.info.description || 'No description available.');
                } else {
                    setDescription('No description available.');
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching API details:', error);
                setError('Failed to fetch API details.');
                setLoading(false);
            }
        };

        fetchApiDetails();
    }, [provider]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {apiDetails && <ApiDetails apiDetails={apiDetails} />}
        </div>
    );
};

export default ApiDetailPage;
