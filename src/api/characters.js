import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/character";

export const fetchCharacters = async (params = {}) => {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
};

export const fetchCharacterById = async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
};
