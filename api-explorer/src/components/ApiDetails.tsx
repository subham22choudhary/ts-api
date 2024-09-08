import React from 'react';

interface ApiDetailsProps {
    apiDetails: any;
}

const ApiDetails: React.FC<ApiDetailsProps> = ({ apiDetails }) => {
    if (!apiDetails || !apiDetails.apis) {
        return <div>No details available</div>;
    }

    const apiEntries = Object.entries(apiDetails.apis);

    return (
        <div>
            {apiEntries.map(([key, value]) => {



                return (
                    <div key={key}>


                        <h2 className="api-title">{value.info['x-logo'] && value.info['x-logo'].url && (
                            <img
                                src={value.info['x-logo'].url}
                                alt={value.info.title || 'API Logo'}
                                style={{ width: '100px', height: 'auto' }}
                            />
                        )} {value.info.title || 'No title available'}</h2>



                        <h3><strong>Description:</strong> </h3>
                        <p>{value.info.description || 'No description available'}</p>


                        <h3><strong>Swagger URL:</strong></h3>
                        <p><a href={value.swaggerUrl} target="_blank" rel="noopener noreferrer">{value.swaggerUrl}</a></p>
                        <h3><strong>Contact:</strong> </h3>
                        <p><strong>Email:</strong> {value.info.contact.email || 'No contact available'}</p>
                        <p><strong>Name:</strong> {value.info.contact.name || 'No contact available'}</p>
                        <p><strong>URL:</strong> {value.info.contact.url || 'No contact available'}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ApiDetails;
