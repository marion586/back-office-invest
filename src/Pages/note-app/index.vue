<template>
  <div class="container">
    <noteData />
    <Input
      placeholder="entrer note"
      input-type="string"
      name="note"
      @onInput="handleInput"
    />
    <NoteCount />
  </div>
</template>

<script>
import noteData from "./note-data.vue";
import Input from "../../components/Input/Input.vue";
import NoteCount from "./note-count.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import testService from "@/services/test";
export default {
  name: "indexComponents",
  components: {
    noteData,
    Input,
    NoteCount,
  },

  setup() {
    const first = ref(false);
    const store = useStore();
    async function test() {
      const { data } = await testService.login({
        email: "pareto@gmail.com",
        password: "123654",
      });
      console.log(data);
    }
    const handleInput = (event) => {
      test();
      store.dispatch("TestModule/addNote", event.value);
      store.dispatch("TestModule/addTimestamp", new Date().toLocaleString());
    };

    return {
      first,
      handleInput,
    };
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
}
</style>
