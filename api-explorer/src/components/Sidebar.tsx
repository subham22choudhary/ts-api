import React from 'react';

interface SidebarProps {
    providers: string[];
    onProviderClick: (provider: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ providers, onProviderClick }) => {
    return (
        <div>
            <h2>API Providers</h2>
            <ul>
                {providers.map(provider => (
                    <li key={provider}>
                        <button onClick={() => onProviderClick(provider)}>{provider}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
