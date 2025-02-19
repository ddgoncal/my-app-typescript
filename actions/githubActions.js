import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchUserInfo = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching github user:', error);
    throw error;
  }
};