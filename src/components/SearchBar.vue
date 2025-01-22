<template>
  <input type="text" placeholder="Поиск персонажа..." @input="onInput" />
</template>

<script>
import debounce from "lodash/debounce";

export default {
  methods: {
    onInput: debounce(function (e) {
      this.$emit("search", e.target.value);
    }, 500),
  },
};
</script>

<style scoped lang="scss">
input {
  width: 100%;
  display: block;
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid #000000;
}
</style>