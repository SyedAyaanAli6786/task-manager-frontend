import { toast } from 'react-toastify';
// import dotenv from 'dotenv';

// dotenvṭ.config();


export const notify = (message, type) => {
    toast[type](message);
}

export const API_URL = 'http://localhost:8080';
