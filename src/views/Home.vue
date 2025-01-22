<template>
  <div>
    <SearchBar @search="searchCharacters" />
    <div class="characters-list">
      <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
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
import CharacterCard from "../components/CharacterCard.vue";
import Pagination from "../components/Pagination.vue";


export default {
  name: "HomeView",
  components: { CharacterCard, Pagination, SearchBar },
  data () {
    return {
      search: '',
    };
  },
  computed: {
    ...mapState("characters", ["characters", "pageInfo"]),
  },
  methods: {
    ...mapActions("characters", ["fetchCharacters"]),
    searchCharacters(name) {
      this.fetchCharacters({ name });
      this.search = name;
    },
    changePage(page) {
      this.fetchCharacters({ page, name: this.search });
    },
  },
  created() {
    this.fetchCharacters({ page: 1 });
  },
}
</script>

<style scoped>
.characters-list {
  margin: 16px auto;
  gap: 16px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>