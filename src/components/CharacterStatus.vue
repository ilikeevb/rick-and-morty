<template>
  <div class="status">
    <span class="status__badge" :class="`status__badge--${status.toLowerCase()}`" />
    <span>{{ status }}</span>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: 'unknown',
    },
  },
};
</script>

<style scoped lang="scss">
.status {
  gap: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
}

.status__badge {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  &--alive {
    background: #55cc44;
  }
  &--dead {
    background: #d63d2e;
  }
  &--unknown {
    background: #9e9e9e;
  }
}
</style>