<template>
  <div class="main-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "mainComponent",
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background: #eaeaea;
}
</style>
