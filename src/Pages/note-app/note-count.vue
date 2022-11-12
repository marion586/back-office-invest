<template>
  <div>
    <label for="">Note count: </label>
    <span>{{ count }}</span>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const count = computed(() => store.getters["TestModule/getNoteCount"]);
    return {
      count,
    };
  },
};
</script>

<style scoped></style>
