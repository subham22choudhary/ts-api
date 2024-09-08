import React from 'react';

interface ApiListProps {
    apis: any[];
}

const ApiList: React.FC<ApiListProps> = ({ apis }) => {
    return (
        <div>
            <h2>APIs</h2>
            <ul>
                {apis.length > 0 ? (
                    apis.map((api, index) => (
                        <li key={index}>{api.name}</li>
                    ))
                ) : (
                    <li>No APIs available</li>
                )}
            </ul>
        </div>
    );
};

export default ApiList;
