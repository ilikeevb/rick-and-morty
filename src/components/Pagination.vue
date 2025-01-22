<template>
  <div class="pagination">
    <button
        @click="goToPage(currentPage - 1)"
        :disabled="!hasPreviousPage"
        class="button button--prev"
    >
      Назад
    </button>

    <!-- Если страниц <= 3 -->
    <template v-if="totalPages <= 3">
      <button
          v-for="page in totalPages"
          :key="page"
          class="button"
          :class="{ 'button--active': currentPage === page }"
          @click="goToPage(page)"
      >
        {{ page }}
      </button>
    </template>

    <!-- Если страниц > 3 -->
    <template v-else>
      <button
          v-if="currentPage > 1"
          @click="goToPage(currentPage - 1)"
          class="button"
      >
        {{ currentPage - 1 }}
      </button>
      <button class="button button--active">
        {{ currentPage }}
      </button>
      <button
          v-if="currentPage < totalPages"
          class="button"
          @click="goToPage(currentPage + 1)"
      >
        {{ currentPage + 1 }}
      </button>
    </template>

    <button
        @click="goToPage(currentPage + 1)"
        :disabled="!hasNextPage"
        class="button button--next"
    >
      Вперед
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  computed: {
    hasPreviousPage() {
      return this.currentPage > 1;
    },
    hasNextPage() {
      return this.currentPage < this.totalPages;
    },
  },
  methods: {
    goToPage(page) {
      if (this.currentPage === page) return;
      this.$emit("changePage", page);
    },
  },
};
</script>

<style scoped lang="scss">
.pagination {
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  height: 36px;
  width: 36px;
  cursor: pointer;
  background: #ffffff;
  border: none;
  font-weight: bold;
  border-radius: 4px;
  &:hover {
    background: #f4f4f5;
  }
}

.button--next, .button--prev {
  width: 80px;
}

.button--active {
  border: 1px solid #000000;
}

.button:disabled {
  cursor: not-allowed;
  opacity: 0.75;
}
</style>
