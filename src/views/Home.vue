<template>
  <div>
    <h1>Home</h1>
    <SearchBar @search="searchCharacters" />
    <div>
      <div v-for="character in characters">
        <router-link :to="{ name: 'Character', params: { characterId: character.id }}">
          {{ character.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SearchBar from "../components/SearchBar.vue";

export default {
  name: "HomeView",
  components: { SearchBar },
  computed: {
    ...mapState("characters", ["characters"]),
  },
  methods: {
    ...mapActions("characters", ["fetchCharacters"]),
    searchCharacters(name) {
      this.fetchCharacters({ name });
    },
  },
  created() {
    this.fetchCharacters({ page: 1 });
  },
}
</script>
