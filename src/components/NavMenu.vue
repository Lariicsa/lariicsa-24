<!-- @format -->
<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router"
import { useI18n } from "vue-i18n";
import Tr from "@/i18n/translation";

import AppButton from "@/components/AppButton.vue";
import AppLanguage from "@/components/AppLanguage.vue";
import Applogo from "./icons/Applogo.vue";
import AppMobileNav from "./AppMobileNav.vue";

const { t, locale } = useI18n();
const supportedLocales = Tr.supportedLocales;

const emit = defineEmits(["toggleMenu"]);

const isOpen = ref(false);

defineProps({
	currenRoute: {
		type: String,
	},
});

const iMenu = computed(() => {
	const items = [
		{
			name: t("nav.menu.0.name"),
			link: "/",
			slug: "home",
		},
		{
			name: t("nav.menu.1.name"),
			link: `${Tr.i18nRoute}/experience`,
			slug: "experience",
		},
		{
			name: t("nav.menu.2.name"),
			link: "/about",
			slug: "about",
		},
	];
	return items;
});

const toggleMenu = () => {
	isOpen.value = !isOpen.value;
};
</script>
<template>
	<nav
		class="w-full group flex justify-between items-center max-w-[1280px] h-[28px] rounded-full mt-[32px] mx-auto px-[24px] sm:px-0">
		<Applogo class="w-[116px] h-auto" />

		<button @click="toggleMenu" class="w-[28px] h-[28px] border-none">
			<font-awesome-icon icon="fa-solid fa-bars"
				class="w-[24px] h-auto text-[#E0E0E0] active:text-[#81B2F6] flex sm:hidden" />
		</button>

		<div class="w-auto hidden sm:flex">
			<ul class="w-auto px-[24px] flex p-0 text-[16px] sm:text-[18px] font-medium">
				<li  class="mr-[24px]">
					<RouterLink :to="Tr.i18nRoute({ name: 'about' })">{{ $t("nav.menu.1.name") }}</RouterLink>
				</li>
			</ul>
			<span class="bg-[#51576E] h-[24px] w-[2px] mx-[24px]"></span>
			<AppButton :isLink="true" link="resume_Larissa_Avila.pdf" color="blue" size="sm">{{ $t("nav.resume") }}
			</AppButton>
			<span class="bg-[#51576E] h-[24px] w-[2px] mx-[24px]"></span>
			<AppLanguage id="topLang" />
		</div>
		<AppMobileNav :menuItems="iMenu" :isOpen="isOpen" @toggleButton="toggleMenu" />
	</nav>
</template>
