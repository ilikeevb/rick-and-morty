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
