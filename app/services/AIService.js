import axios from 'axios';
import {API_URL} from '@env';
const baseURL = `http://${API_URL}:5000/ai`;

const AIService = {

    async generate_flashcards(payload, token){
        const response = await axios.post(`${baseURL}`,payload, {headers: {Authorization: `Bearer ${token}`}} ,{withCredentials: true});
        return response
    },

    async interact_flashcards(folder_id, payload, token){
        const response = await axios.post(`${baseURL}/${folder_id}`,payload, {headers: {Authorization: `Bearer ${token}`}} ,{withCredentials: true});
        return response
    }

}

export default AIService