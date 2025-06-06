<script setup>
const emit = defineEmits(["clickOnEnvelope"]);
import AppEmailLink from "@/components/AppEmailLink.vue"


const contact = [
	{
		slug: 'lkn01',
		icon: "fa-brands fa-linkedin",
		link: "https://www.linkedin.com/in/lariicsa",
	},
	// {
	// 	icon: "fa-brands fa-github",
	// 	link: "https://github.com/Lariicsa",
	// },
];

const clickOnEnvelope = (email) => {
	emit("clickOnEnvelope", email);
};
</script>
<template>
	<div class="flex w-auto h-auto">
		<div class="w-[320px] flex justify-around items-center">
			<a v-for="item in contact" :key="item.slug" :href="item.link" target="_blank"
				class="w-[26px] h-[24px] sm:w-[40px] sm:h-[40px] text-[#E0E0E0] active:text-[#81B2F6] sm:hover:text-[#81B2F6]">
				<font-awesome-icon :icon="item.icon" class="w-full h-auto" />
			</a>
			<AppEmailLink @clickOnEnvelope="clickOnEnvelope(email)" iconType="home" size="26px" />
		</div>
	</div>
</template>
