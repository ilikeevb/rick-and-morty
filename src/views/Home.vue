<template>
  <div>
    <SearchBar @search="searchCharacters" />
    <div>
      <div v-for="character in characters">
        <router-link :to="{ name: 'Character', params: { characterId: character.id }}">
          {{ character.name }}
        </router-link>
      </div>
    </div>
    <Pagination
        v-if="characters.length > 1"
        :currentPage="pageInfo.current"
        :totalPages="pageInfo.pages"
        @changePage="changePage"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import SearchBar from "../components/SearchBar.vue";
import Pagination from "../components/Pagination.vue";

export default {
  name: "HomeView",
  components: { Pagination, SearchBar },
  computed: {
    ...mapState("characters", ["characters", "pageInfo"]),
  },
  methods: {
    ...mapActions("characters", ["fetchCharacters"]),
    searchCharacters(name) {
      this.fetchCharacters({ name });
    },
    changePage(page) {
      this.fetchCharacters({ page });
    },
  },
  created() {
    this.fetchCharacters({ page: 1 });
  },
}
</script>
