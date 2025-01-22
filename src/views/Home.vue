<template>
  <div>
    <h1>Home</h1>
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

export default {
  name: "HomeView",
  computed: {
    ...mapState("characters", ["characters"]),
  },
  methods: {
    ...mapActions("characters", ["fetchCharacters"]),
  },
  created() {
    this.fetchCharacters({ page: 1 });
  },
}
</script>
