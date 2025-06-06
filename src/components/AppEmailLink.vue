<template>
  <button @click="clickOnEnvelope(email)"
    class="border border-[#6C6CDC] rounded-full flex justify-center items-center active:saturate-200 sm:hover:saturate-200"
    :class="`w-[${size}] h-[${size}]`">
    <font-awesome-icon icon="fa-solid fa-envelope" />
  </button>
</template>
<script setup>
import { defineEmits} from "vue";

const emit = defineEmits(["clickOnEnvelope"]);
const clickOnEnvelope = (email) => {
  emit("clickOnEnvelope", email);
  navigator.clipboard.writeText(email);
}

defineProps({
  size: {
    type: String,
    default: '28px'
  }
});
</script>