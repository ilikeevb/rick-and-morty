<template>
  <div class="card">
    <div class="card__image">
      <img :src="character.image" :alt="character.name">
    </div>
    <div>
      <router-link
          :to="{ name: 'Character', params: { characterId: character.id } }"
          class="card__character-name"
      >
        {{ character.name }}
      </router-link>
     <CharacterStatus :status="character.status" />
    </div>
  </div>
</template>

<script>
import CharacterStatus from "./CharacterStatus.vue";

export default {
  components: {CharacterStatus},
  props: ["character"],
};
</script>

<style scoped lang="scss">
.card {
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 16px;

  gap: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;

  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 8px;
}

.card__image {
  width: 110px;
  height: 110px;
  border-radius: 100%;
  overflow: hidden;
  background: #cccccc;

  img {
    width: 100%;
  }
}

.card__character-name {
  display: block;
  text-align: center;
}
</style>
