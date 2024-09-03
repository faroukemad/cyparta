// src/api.ts
import axios from 'axios';

const API_URL = 'https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/';

export const fetchProfile = async (accessToken: string) => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch profile data.');
    }
};
