// services/loginService.ts
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface LoginResponse {
    access: string;
    
}

export const useLogin = () => {
    const router = useRouter();
    const [error, setError] = React.useState<string | null>(null);

    const handleLogin = async (credentials: { email: string; password: string }) => {
        try {
            const response = await axios.post<LoginResponse>('https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/', credentials);

            if (response.data) {
                console.log('Login successful:', response.data);
                router.push(`/profile?access=${response.data.access}`);
            } else {
                setError("An error occurred. Please try again.");
                setTimeout(() => setError(null), 3000); 
            }
        } catch (error) {
            setError("Invalid credentials. Please try again.");
            setTimeout(() => setError(null), 3000); 
        }
    };

    return { handleLogin, error };
};
