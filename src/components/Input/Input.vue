<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="content__label-input">
    <label for="mail" class="label-connexion">{{ label }}</label>
    <a-input
      class="input-connexion"
      :type="inputType"
      :name="name"
      :placeholder="placeholder"
      @keyup.enter="
        $emit('onInput', {
          name: $event.target.name,
          value: $event.target.value,
        })
      "
    />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      inputType: String,
      default: "test",
    },
    placeholder: {
      type: String,
      default: "",
    },

    inputType: {
      type: String,
      default: "text",
    },
    value: {
      type: String || Number,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },

  watch: {
    value: {
      immediate: true,
      handler(newValue) {
        console.log("value", newValue);
        this.val = newValue;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.label-connexion {
  font-weight: bold;
  font-size: 18px;
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  &__form,
  &__img {
    margin: 0px 20px 20px 20px;
    width: 450px;
    height: 600px;
    box-shadow: 4px 4px 13px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  &__form {
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  &__form-input {
    height: 300px;
    margin: auto auto;
  }

  &__img {
    flex-grow: 1;

    @media screen and (max-width: 1142px) {
      display: none;
    }
  }

  &__label-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 18px;
  }
}
.input-connexion {
  width: 330px;
  height: 40px;
  background: #f5f9f9;
  border-radius: 10px;
}
</style>
