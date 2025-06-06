<template>
  <div v-if="iconType === 'footer'" @click="clickOnEnvelope(email)" role="button"
    class="border border-[#6C6CDC] rounded-full flex justify-center items-center active:saturate-200 sm:hover:saturate-200"
    :class="`w-[${size}] h-[${size}]`">
    <font-awesome-icon :icon="iconSelected" />
  </div>
  <div v-else @click="clickOnEnvelope(email)" role="button"
    class="w-[26px] h-[24px] sm:w-[40px] sm:h-[40px] text-[#E0E0E0] active:text-[#81B2F6] sm:hover:text-[#81B2F6]">
    <font-awesome-icon :icon="iconSelected" class="w-full h-auto" />
  </div>
</template>
<script setup>
import { computed, defineEmits, defineProps } from "vue";

const emit = defineEmits(["clickOnEnvelope"]);
const clickOnEnvelope = (email) => {
  emit("clickOnEnvelope", email);
  navigator.clipboard.writeText(email);
}


const props = defineProps({
  size: {
    type: String,
    default: '28px'
  },
  iconType: {
    type: String,
    default: 'footer'
  }
});

let iconSelected = computed(() => {
  let selected
  switch (props.iconType) {
    case 'home':
      selected = 'fa-solid fa-square-envelope'
      break

    default:
      selected = 'fa-solid fa-envelope'
      break
  }
  return selected
})
</script>