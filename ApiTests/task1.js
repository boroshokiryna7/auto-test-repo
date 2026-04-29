import axios from 'axios';

export async function FetchBadURL() {        
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/invalidendpoint');
        return {
            success: true,
            data: response.data
        };
    } catch (error) {       
        if (error.response) {   
            return {
                success: false,
                status: error.response.status,
                message: `Error Status: ${error.response.status}`
            };
        }
        return {
            success: false,
            message: 'Error occurred'
        };
    }
} 