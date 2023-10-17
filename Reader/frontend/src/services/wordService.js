import axios from 'axios';

const BASE_URL = 'http://localhost:9876'; // Spring Boot backend URL

const api = axios.create({
  baseURL: BASE_URL,
});

// API function to get word meanings
export const getWordMeaning = async (word) => {
  try {
    const response = await api.get(`/words/w/${word}`);
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    throw error; // errors
  }
};
export default getWordMeaning;
