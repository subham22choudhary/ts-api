import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getProviders } from '../services/apiService';

const Home: React.FC = () => {
    const [providers, setProviders] = React.useState<string[]>([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchProviders = async () => {
            try {
                const { data } = await getProviders();
                setProviders(data);
            } catch (error) {
                console.error('Error fetching providers:', error);
            }
        };

        fetchProviders();
    }, []);

    const handleProviderClick = (provider: string) => {
        navigate(`/api-details/${provider}`);
    };

    return (
        <div>
            <h1>API Providers</h1>
            <ul>
                {providers.map((provider) => (
                    <li key={provider}>
                        <button onClick={() => handleProviderClick(provider)}>
                            {provider}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
