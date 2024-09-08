import axios from 'axios';

const BASE_URL = 'https://api.apis.guru/v2';

export const getProviders = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/providers.json`);
        console.log('Providers fetched:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching providers:', error);
        throw error;
    }
};

export const getApisByProvider = async (provider: string) => {
    try {

        const url = `${BASE_URL}/${provider}.json`;
        console.log('Fetching data from URL:', url);
        const response = await axios.get(url);
        console.log('APIs fetched:', response.data);
        return response.data;
    } catch (error) {
        console.error(`Error fetching APIs for provider ${provider}:`, error);
        throw error;
    }
};
