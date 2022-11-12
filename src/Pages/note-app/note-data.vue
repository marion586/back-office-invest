<template>
  <div class="content">
    <div class="content__left">
      <h1>notes</h1>
      <p for="" v-for="note in notes" :key="note">{{ note }}</p>
    </div>
    <div class="content__right">
      <h1>Timpstamps</h1>
      <p for="" v-for="time in timestamps" :key="time">
        {{ time }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const notes = computed(() => store.getters["TestModule/getNotes"]);
    const timestamps = computed(
      () => store.getters["TestModule/getTimestamps"]
    );
    return {
      notes,
      timestamps,
    };
  },
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: center;
  gap: 40px;
}
p {
  margin: 0;
}
</style>
