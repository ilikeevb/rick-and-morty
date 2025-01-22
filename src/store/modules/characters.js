import { fetchCharacters, fetchCharacterById } from "../../api/characters.js";

const state = () => ({
    characters: [],
    character: null,
    pageInfo: {},
})

const getters = {}

const actions = {
    async fetchCharacters({ commit }, { page = 1, name = '' }) {
        const data = await fetchCharacters({ page, name });
        commit("SET_CHARACTERS", data);
        commit("SET_PAGE_INFO", { current: page, ...data.info });
    },
    async fetchCharacter({ commit }, id) {
        const data = await fetchCharacterById(id);
        commit("SET_CHARACTER", data);
    },
}

const mutations = {
    SET_CHARACTER(state, payload) {
        state.character = payload;
    },
    SET_CHARACTERS(state, payload) {
        state.characters = payload.results;
    },
    SET_PAGE_INFO(state, payload) {
        state.pageInfo = {
            pages: payload.pages,
            current: payload.current,
        };
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
