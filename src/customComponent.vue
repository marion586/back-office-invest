<template>
  <div>
    <!-- <input type="text" :value="value" @input="$emit('on-input', $event)" /> -->
    <!-- <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    /> -->
    <div class="address__field">
      <label for="fullName">fullName</label>
      <input
        type="text"
        id="fullName"
        :value="fullName"
        @input="$emit('update:fullName', $event.target.value)"
      />
    </div>
    <div class="address__field">
      <label for="address-line">Address Line 1</label>
      <input
        type="text"
        id="address-line"
        :value="addressLine"
        @input="$emit('update:addressLine', $event.target.value)"
      />
    </div>
    <div class="address__field">
      <label for="streetHome">street home</label>
      <input
        type="text"
        id="streetHome"
        :value="streetHome"
        @input="$emit('update:streetHome', $event.target.value)"
      />
    </div>
    <div class="address__field">
      <label for="is-home-address">Is home address?</label>
      <input
        type="checkbox"
        id="is-home-address"
        :checked="homeAddress"
        @change="$emit('update:homeAddress', $event.target.checked)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addressLine: {
      type: String,
      default: "",
    },
    fullName: {
      type: String,
      default: "",
    },
    streetHome: {
      type: String,
      default: "",
    },
    homeAddress: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped></style>
