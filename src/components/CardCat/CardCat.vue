<script setup>
import { defineProps } from "vue";
defineProps({
  data: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="card">
    <figure class="card__img">
      <img :src="data.image" alt="" />
    </figure>

    <div class="card__content">
      <h3>{{ data.name }}</h3>
      <div>
        <span>Edit</span>
        <span> delete </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply w-[200px] h-[200px] border-[1px] border-[#243c5a] rounded-[12px];
  overflow: hidden;
  &__img {
    @apply w-full h-[100px];
    img {
      @apply w-full h-full object-cover;
    }
  }
  &__content {
    @apply flex flex-col items-center;
    h3 {
    }
  }
}
</style>
