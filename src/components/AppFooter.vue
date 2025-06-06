<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import AppToaster from "@/components/AppToaster.vue";
import AppEmailLink from "@/components/AppEmailLink.vue"
import Tr from "@/i18n/translation";

const email = 'lariicsa@gmail.com'
const showMessage = ref(false)
const copyEmail = () => {
	showMessage.value = true
	setTimeout(() => {
		showMessage.value = false;
	}, 3000)
}


const contact = [
	{
		slug: 'lkn01',
		icon: "fa-brands fa-linkedin",
		link: "https://www.linkedin.com/in/lariicsa",
	}
];
</script>
<template>
	<footer
		class="flex w-full h-[56px] bg-gradient-to-r from-[#9494D2] to-[#ABB4FF] text-[#5252E1] relative bottom-0 left-0 px-[16px] z-[4]">
		<div class="w-full max-w-[1280px] flex justify-between items-center mx-auto">
			<span class="text-[12px] sm:text-[16px]"> {{ $t("footer.lastUpdate") }}</span>
			<div class="w-[124px] sm:w-[116px] flex justify-between items-center">
				<a v-for="item in contact" :href="item.link" :key="item.slug"
					class="border border-[#6C6CDC] rounded-full flex justify-center items-center w-[28px] h-[28px] active:saturate-200 sm:hover:saturate-200">
					<font-awesome-icon :icon="item.icon" class="w-[16px] h-auto" />
				</a>
				<AppEmailLink @clickOnEnvelope="copyEmail(email)"/>
			</div>
		</div>
		<AppToaster :show="showMessage">
			{{ $t("shared.copyEmail") }}
		</AppToaster>
	</footer>
</template>
