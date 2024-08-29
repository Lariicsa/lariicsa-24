<!-- @format -->
<script setup>
import { useI18n } from "vue-i18n";
import Tr from "@/i18n/translation";

const { t, locale } = useI18n();
const supportedLocales = Tr.supportedLocales;
</script>
<template>
	<div class="flex flex-col items-center w-full mb-[120px] md:mb-0">
		<h1 class="mt-[56px] text-[44px] text-[#E5E5E5] text-center font-semibold">
			{{ $t("about.title") }}
		</h1>

		<div
			class="cont1 flex items-center md:items-stretch bg-[#FFE194] flex-col sm:flex-row w-full max-w-[1124px] h-auto mt-[64px] md:mt-[108px] rounded-br-[80px]  md:rounded-bl-[122px] rounded-tl-[80px] md:rounded-tr-[122px] relative">
			<p
				class="big-txt text-[70px] sm:text-[120px] absolute top-[-72px] sm:top-[-120px] left-auto text-center w-full z-0 opacity-5 font-bold text-[#FFE194]">
				{{ $t("about.title") }}
			</p>

			<div
				class="flex w-auto h-[200px] md:h-auto sm:w-1/3 bg-transparent md:bg-[#FFE194] rounded-bl-[122px] relative z-[2]">
				<div
					class="rounded-full md:rounded-bl-[122px] md:rounded-br-none md:rounded-tr-none md:rounded-tl-none overflow-hidden w-[200px] h-[200px] sm:w-[396px] sm:h-auto bg-cover bg-no-repeat bg-right mt-[24px] md:mt-0"
					style="background-image: url(about_me.jpg)"></div>
			</div>

			<div
				class="flex flex-col w-xl sm:w-2/3 bg-transparent md:bg-[#FFE194] text-[#373737] rounded-tl-[80px] md:rounded-tr-[122px] px-[24px] md:px-[48px] py-[48px] relative z-[2]">
				<h2 class="text-center md:text-left font-semibold md:text-[32px] text-[24px]">
					{{ $t("about.fullName") }}
				</h2>
				<p class="text-center md:text-left text-[14px] md:text-[20px] mt-[24px] md:mt-[32px]">
					{{ $t("about.abstract.0") }}
					<br /> <br />
					{{ $t("about.abstract.1") }}
				</p>
			</div>
		</div>
	</div>
</template>
