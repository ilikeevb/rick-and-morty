<template>
  <div>
    {{ character }}
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "CharacterView",
  computed: {
    ...mapState("characters", ["character"]),
  },
  methods: {
    ...mapActions("characters", ["fetchCharacter"]),
  },
  created() {
    this.fetchCharacter(this.$route.params.characterId);
  },
};
</script>
