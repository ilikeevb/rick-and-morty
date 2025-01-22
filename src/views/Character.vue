<template>
  <div v-if="character" class="character">
    <div class="character__image">
      <img :src="character.image" :alt="character.name" />
    </div>
    <h1 class="character__name">{{ character.name }}</h1>
    <CharacterStatus :character="character.status" />
    <div>
      <b>Gender:</b> {{ character.gender }}
    </div>
    <div>
      <b>Species:</b> {{ character.species }}
    </div>
    <div>
      <b>Location:</b> {{ character.location.name }}
    </div>
    <router-link to="/">На главную</router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CharacterStatus from "../components/CharacterStatus.vue";

export default {
  name: "CharacterView",
  components: { CharacterStatus },
  computed: {
    ...mapState("characters", ["character"]),
  },
  methods: {
    ...mapActions("characters", ["fetchCharacter", "clearCharacter"]),
  },
  created() {
    this.fetchCharacter(this.$route.params.characterId);
  },
  unmounted() {
    this.clearCharacter();
  }
};
</script>

<style scoped lang="scss">
.character {
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.character__image {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  overflow: hidden;
  background: #cccccc;

  img {
    width: 100%;
  }
}

.character__name {
  margin: 0;
}
</style>
