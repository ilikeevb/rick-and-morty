import { fetchCharacters } from "../../api/characters.js";

const state = () => ({
    characters: [],
    pageInfo: {},
})

const getters = {}

const actions = {
    async fetchCharacters({ commit }, { page = 1 }) {
        const data = await fetchCharacters({ page });
        commit("SET_CHARACTERS", data);
        commit("SET_PAGE_INFO", { current: page, ...data.info });
    },
}

const mutations = {
    SET_CHARACTERS(state, payload) {
        state.characters = payload.results;
    },
    SET_PAGE_INFO(state, payload) {
        state.pageInfo = {
            pages: payload.pages,
            current: payload.current,
        };
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
