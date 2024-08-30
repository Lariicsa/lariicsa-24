<!-- @format -->
<script setup>
import { RouterLink } from "vue-router"
import { useI18n } from "vue-i18n";
import Tr from "@/i18n/translation";
import AppButton from "@/components/AppButton.vue";
import AppLanguage from "./AppLanguage.vue";

const { t, locale } = useI18n();
const supportedLocales = Tr.supportedLocales;

const emit = defineEmits(["toggleButton"]);
const toggleButton = () => {
	emit("toggleButton");
};

defineProps({
	menuItems: {
		type: Array,
		default: () => [],
	},
	isOpen: {
		type: Boolean,
		default: false,
	},
	currenRoute: {
		type: String,
	},
});
</script>
<template>
	<div class="mobileMenu w-full h-full fixed z-50 top-0 right-0 bg-[#000000]/70 transition duration-200 ease-in-out"
		:class="isOpen ? 'translate-x-0' : 'translate-x-full'">
		<div class="bg-[#353d47] text-[#e0e0e0] absolute h-full px-[24px] pt-[72px] w-[80%] right-0">
			<div class="absolute w-[32px] h-[32px] right-[32px] top-[32px] active:text-[#81B2F6]">
				<font-awesome-icon @click.stop="toggleButton" icon="fa-solid fa-circle-xmark"
					class="w-full h-full text-white active:text-[#81B2F6]" />
			</div>
			<div class="flex flex-col h-full w-full">
				<ul class="w-full p-0">
					<li
						class="w-full text-[18px] py-0 text-[#f0f0f0] my-[24px] border border-x-0 border-t-0 border-b-[#51576E] border-dotted">
						<RouterLink :to="Tr.i18nRoute({ name: 'home' })" class="block h-full w-full py-[16px]"
							:class="'home' === currenRoute ? 'text-[#81B2F6]' : 'text-[#e0e0e0]'"> {{ $t("nav.menu.0.name")
							}}</RouterLink>
					</li>
					<li
						class="w-full text-[18px] py-0 text-[#f0f0f0] my-[24px] border border-x-0 border-t-0 border-b-[#51576E] border-dotted">
						<RouterLink :to="Tr.i18nRoute({ name: 'experience' })" class="block h-full w-full py-[16px]"
							:class="'experience' === currenRoute ? 'text-[#81B2F6]' : 'text-[#e0e0e0]'"> {{ $t("nav.menu.1.name")
							}}</RouterLink>
					</li>
					<li
						class="w-full text-[18px] py-0 text-[#f0f0f0] my-[24px] border border-x-0 border-t-0 border-b-[#51576E] border-dotted">
						<RouterLink :to="Tr.i18nRoute({ name: 'about' })" class="block h-full w-full py-[16px]"
							:class="'about' === currenRoute ? 'text-[#81B2F6]' : 'text-[#e0e0e0]'"> {{ $t("nav.menu.2.name")
							}}</RouterLink>
					</li>
				</ul>
				<AppButton class="mr-auto" :isLink="true" link="resume_Larissa_Avila.pdf" color="blue" size="md">Resume
				</AppButton>

				<div class="flex justify-start items center mt-[24%]">
					<AppLanguage id="mobileLang" />
				</div>
			</div>
		</div>
	</div>
</template>
<style>
.mobileMenu {
	-webkit-overflow-scrolling: touch;
}
</style>
