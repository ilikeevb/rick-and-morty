<template>
  <div>
    <h1>Character {{ characterId }}</h1>
  </div>
</template>

<script>
export default {
  name: "CharacterView",
  data() {
    return {
      characterId: null,
    }
  },
  created() {
    this.characterId = this.$route.params.characterId;
  },
};
</script>