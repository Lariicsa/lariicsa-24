<!-- @format -->

<script setup>
	import { computed } from "vue";
	import { useI18n } from "vue-i18n";
	import { useRouter } from "vue-router";
	import Tr from "@/i18n/translation";

	const { t, locale } = useI18n();
	const supportedLocales = Tr.supportedLocales;
	const router = useRouter();

	const currentLanguage = computed(() => {
		return Tr.getCurrentLocale();
	});

	const changeLanguage = async (event) => {
		const newLocale = event.target.value;

		await Tr.changeLanguage(newLocale);

		try {
			await router.replace({ params: { locale: newLocale } });
		} catch (e) {
			console.log(e);
			router.push("/");
		}
	};
</script>
<template>
	<div class="relative w-[72px] uppercase flex items-center justify-center">
		<label
			for="langId"
			class="flex items-center w-auto absolute top-0 left-auto h-auto active:text-[#81B2F6] sm:hover:text-[#81B2F6]">
			<font-awesome-icon
				icon="fa-solid fa-globe"
				class="text-[#e0e0e0] w-auto h-[29px] active:text-[#81B2F6] sm:hover:text-[#81B2F6]" />
			<span
				class="text-[#e0e0e0] my-auto ml-[8px] active:text-[#81B2F6] sm:hover:text-[#81B2F6]"
				>{{ currentLanguage }}</span
			>
		</label>
		<div
			class="custom-select relative w-auto h-auto flex justify-center items-center active:text-[#81B2F6] sm:hover:text-[#81B2F6]">
			<select id="langId" @change.stop="changeLanguage" class="">
				<option
					v-for="sLocale in supportedLocales"
					:key="`locale-${sLocale}`"
					:value="sLocale"
					:selected="locale === sLocale">
					{{ t(`locale.${sLocale}`) }}
				</option>
			</select>
		</div>
	</div>
</template>
<style>
	.custom-select select {
		appearance: none;
		width: 100%;
		font-size: 1.15rem;
		padding: 0;
		background-color: transparent;
		border: none;
		cursor: pointer;
		opacity: 0;
	}
</style>
