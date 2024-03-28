import axios from 'axios';

const API_URL = 'https://pulse.test.fgx.webally.co.za/api/user';

export class AuthService {
    static async register(username: string, email: string, password: string, deviceToken: string) {
        const response = await axios.post(`${API_URL}/register`, { 
            username, 
            email, 
            password, 
            device_token: deviceToken // Ensure your API supports this.
        });
        return response.data;
    }
    
    static async login(email: string, password: string) {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        localStorage.setItem('token', response.data.token);
        return response.data;
    }

}