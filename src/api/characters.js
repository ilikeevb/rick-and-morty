import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/character";

export const fetchCharacters = async (params = {}) => {
    try {
        const response = await axios.get(BASE_URL, { params });
        return response.data;
    } catch (error) {
        console.error(error);
        return { results: [], info: { pages: 1 } };
    }
};

export const fetchCharacterById = async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
};
