<script setup>
import { useI18n } from "vue-i18n";
import Tr from "@/i18n/translation";

const { t, locale } = useI18n();
const supportedLocales = Tr.supportedLocales;
const picAbout = '../about_me.jpg'
</script>
<template>
	<div class="flex flex-col items-center w-full mb-[120px] md:mb-0 h-full min-h-[calc(100vh-116px)]">
		<h1 class="mt-[56px] text-[44px] text-[#E5E5E5] dark:text-white text-center font-semibold">
			{{ $t("about.title") }}
		</h1>

		<div
			class="cont1 flex items-center md:items-stretch bg-[#FFE194] dark:bg-black flex-col sm:flex-row w-full max-w-[1124px] h-auto mt-[64px] md:mt-[108px] rounded-br-2xl  md:rounded-bl-[66px] rounded-tl-2xl md:rounded-tr-[122px] relative">
			<p
				class="big-txt text-[70px] sm:text-[120px] absolute top-[-72px] sm:top-[-120px] left-auto text-center w-full z-0 opacity-5 font-bold text-[#FFE194] dark:text-gray-100">
				{{ $t("about.title") }}
			</p>

			<div
				class="flex w-auto h-[200px] md:h-auto sm:w-1/3 bg-transparent md:bg-[#FFE194] rounded-bl-[33px] relative z-[2]">
				<div
					class="rounded-xl md:rounded-bl-3xl md:rounded-br-none md:rounded-tr-none md:rounded-tl-none overflow-hidden w-[200px] h-[200px] sm:w-[396px] sm:h-auto bg-cover bg-no-repeat bg-right mt-[24px] md:mt-0"
					:style="`background-image: url(${picAbout})`"></div>
			</div>

			<div
				class="flex flex-col  w-xl sm:w-2/3 bg-transparent md:bg-[#FFE194] dark:bg-black text-[#373737] dark:text-gray-300 rounded-tl-[40px] md:rounded-tr-3xl px-[24px] md:px-[48px] py-[48px] relative z-[2]">
				<h2 class="text-center md:text-left font-semibold md:text-[32px] text-[24px]">
					{{ $t("about.fullName") }}
				</h2>
				<p class="text-center md:text-left text-[14px] md:text-[20px] mt-[24px] md:mt-[32px]">
					{{ $t("about.abstract.0") }}
				</p>
				<p class="text-center md:text-left text-[14px] md:text-[20px] mt-[24px] md:mt-[32px]">
					{{ $t("about.abstract.1") }}
				</p>
				<p class="text-center md:text-left text-[14px] md:text-[20px] mt-[24px] md:mt-[32px]">
					{{ $t("about.abstract.2") }}
				</p>
			</div>
		</div>
	</div>
</template>
