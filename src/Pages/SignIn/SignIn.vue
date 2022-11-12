<template>
  <MainVue>
    <SignInVue />
  </MainVue>
</template>

<script>
import MainVue from "@/components/Main/Main.vue";
import SignInVue from "@/Containers/SignIn/SignIn.vue";
export default {
  components: {
    MainVue,
    SignInVue,
  },
};
</script>

<style scoped></style>
