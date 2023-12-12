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

// API function to get words with the same root as 'word'
export const getWordsWithSameRoot = async (word) => {
  try {
    const response = await api.get(`words/GetWordsWithSameRoots?word=${word}`);
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    throw error; // errors
  }
};

// API function to get words with the same root as 'word'
export const getTags = async (word) => {
  try {
    const response = await api.get(`words/GetTags?word=${word}`);
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    throw error; // errors
  }


};