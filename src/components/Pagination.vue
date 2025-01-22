<template>
  <div class="pagination">
    <button
        @click="goToPage(currentPage - 1)"
        :disabled="!hasPreviousPage"
    >
      Назад
    </button>

    <!-- Если страниц <= 3 -->
    <template v-if="totalPages <= 3">
      <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="{ active: currentPage === page }"
      >
        {{ page }}
      </button>
    </template>

    <!-- Если страниц > 3 -->
    <template v-else>
      <button
          v-if="currentPage > 1"
          @click="goToPage(currentPage - 1)"
      >
        {{ currentPage - 1 }}
      </button>
      <button class="active">
        {{ currentPage }}
      </button>
      <button
          v-if="currentPage < totalPages"
          @click="goToPage(currentPage + 1)"
      >
        {{ currentPage + 1 }}
      </button>
    </template>

    <button
        @click="goToPage(currentPage + 1)"
        :disabled="!hasNextPage"
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
      this.$emit("changePage", page);
    },
  },
};
</script>

<style>
.pagination {
  display: flex;
  gap: 10px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
}

button.active {
  font-weight: bold;
  background-color: #ddd;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
