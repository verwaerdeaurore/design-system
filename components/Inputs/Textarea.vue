<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);

const handleChange = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <textarea
    :name="name"
    :id="name"
    :value="modelValue"
    @input="handleChange"
    rows="5"
    class="ring-2 ring-[#D90416] focus:ring-[#D90416] focus:outline-none focus:ring-2 px-4 py-2 w-full bg-black/50 text-gray-100"
  />
</template>
