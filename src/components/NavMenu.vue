<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router"
import { useI18n } from "vue-i18n";
import Tr from "@/i18n/translation";

import AppButton from "@/components/AppButton.vue";
import AppDarkMode from "@/components/AppDarkMode.vue";
import AppLanguage from "@/components/AppLanguage.vue";
import Applogo from "@/components/icons/Applogo.vue";
import AppMobileNav from "@/components/AppMobileNav.vue";

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

		<button @click="toggleMenu" class="w-[28px] h-[28px] border-none" :aria-label="$t('nav.accessibility.burger')">
			<font-awesome-icon icon="fa-solid fa-bars"
				class="w-[24px] h-auto text-[#E0E0E0] dark:text-white active:text-[#81B2F6] flex md:hidden" :aria-label="$t('nav.accessibility.open')" />
		</button>

		<div class="w-auto hidden md:flex h-full">
			<ul class="w-auto px-[24px] flex items-center  p-0 text-[16px] sm:text-[18px] font-medium">
				<li class="mr-[24px] my-0">
					<RouterLink :to="Tr.i18nRoute({ name: 'home' })" class="active:text-[#81B2F6] sm:hover:text-[#81B2F6]"
						:class="'home' === currenRoute ? 'text-[#81B2F6] dark:underline' : 'text-[#e0e0e0] dark:text-white'"> {{
							$t("nav.menu.0.name")
						}}</RouterLink>
				</li>
				<li class="mr-[24px] my-0">
					<RouterLink :to="Tr.i18nRoute({ name: 'experience' })" class="active:text-[#81B2F6] sm:hover:text-[#81B2F6]"
						:class="'experience' === currenRoute ? 'text-[#81B2F6] dark:underline' : 'text-[#e0e0e0] dark:text-white'">
						{{ $t("nav.menu.1.name")
						}}</RouterLink>
				</li>
				<li class="mr-[24px] my-0" role="link">
					<RouterLink :to="Tr.i18nRoute({ name: 'about' })" class="active:text-[#81B2F6] sm:hover:text-[#81B2F6]"
						:class="'about' === currenRoute ? 'text-[#81B2F6] dark:underline' : 'text-[#e0e0e0] dark:text-white'"> {{
							$t("nav.menu.2.name")
						}}</RouterLink>
				</li>
			</ul>
			<span class="bg-[#51576E] h-[24px] w-[2px] mx-[24px]"></span>
			<RouterLink :to="Tr.i18nRoute({ name: 'pdfviewer' })" class="active:text-[#81B2F6] sm:hover:text-[#81B2F6]"
				:class="'about' === currenRoute ? 'text-[#81B2F6]' : 'text-[#e0e0e0]'"> {{ $t("nav.resume")
				}}</RouterLink>
			<span class="bg-[#51576E] h-[24px] w-[2px] mx-[24px]"></span>
			<AppLanguage id="topLang" />
			<span class="bg-[#51576E] dark:bg-white h-[24px] w-[2px] mx-[16px]"></span>
			<div class="w-[16px] m-auto h-auto text-[#e0e0e0]">
				<AppDarkMode />
			</div>
		</div>
		<AppMobileNav :menuItems="iMenu" :isOpen="isOpen" @toggleButton="toggleMenu" />
	</nav>
</template>
