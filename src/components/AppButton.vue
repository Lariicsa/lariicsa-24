<!-- @format -->

<script setup>
import { computed } from "vue";
import { useRouter, RouterLink } from "vue-router";
const color = computed(() => {
	return {
		peach: "bg-gradient-to-r from-[#F89E7B] to-[#F58C64] text-[#373737]",
		pink: "bg-gradient-to-r from-[#E5A9B7] to-[#CDA9E5] text-[#373737]",
		blue: "bg-[#81B2F6] text-white",
	}[props.color];
});

const size = computed(() => {
	return {
		lg: "h-[40px] sm:h-[72px] w-auto max-w-[272px] px-[16px] md:px-[32px] sm:px-[48px] text-[22px] sm:text-[32px]",
		md: "h-[32px] sm:h-[64px] w-auto max-w-[200px] px-[14px] sm:px-[40px] text-[18px] sm:text-[24px]",
		sm: "h-[24px] w-auto px-[12px] text-[14px]",
	}[props.size];
});

const props = defineProps({
	color: {
		type: String,
		default: "peach",
	},
	size: {
		type: String,
		default: "lg",
	},
	isLink: {
		type: Boolean,
		default: false,
	},
	link: {
		type: String,
		default: "/",
	},
	to: {
		type: [String, Object],
		default: "home",
	},
	isRoute: {
		type: Boolean,
		default: false,
	}
});
</script>
<template>
	<a v-if="isLink" :href="link" target="_blank"
		class="flex flex-col justify-center items-center border-none rounded-full active:saturate-200 sm:hover:saturate-150 text-center"
		:class="`${color} ${size}`">
		<slot></slot>
	</a>

	<RouterLink v-else-if="isRoute" :to="to"
		class="flex flex-col justify-center items-center border-none rounded-full active:saturate-200 sm:hover:saturate-150 text-center"
		:class="`${color} ${size}`">
		<slot></slot>
	</RouterLink>

	<button v-else
		class="flex flex-col justify-center items-center border-none rounded-full active:saturate-200 sm:hover:saturate-150"
		:class="`${color} ${size}`">
		<slot></slot>
	</button>
</template>
