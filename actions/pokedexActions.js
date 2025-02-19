import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = async (limit = 20, offset = 0) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon`, {
      params: { limit, offset }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    throw error;
  }
};

export const fetchPokemonDetail = async (idOrName) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${idOrName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon detail:', error);
    throw error;
  }
};

export const fetchPokemonSpecies = async (idOrName) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon-species/${idOrName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon species:', error);
    throw error;
  }
};