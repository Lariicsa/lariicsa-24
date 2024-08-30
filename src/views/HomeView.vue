<!-- @format -->
<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import Tr from "@/i18n/translation";
import AppButton from "@/components/AppButton.vue";
import AppContact from "@/components/AppContact.vue";
import AppToaster from "@/components/AppToaster.vue";
import CircleImage from "@/components/CircleImage.vue";

const { t, locale } = useI18n();
const supportedLocales = Tr.supportedLocales;
const router = useRouter();

const showMessage = ref(false);
const copyEmailToClipboard = () => {
	navigator.clipboard.writeText("lariicsa@gmail.com");
	showMessage.value = true;
	setTimeout(() => {
		showMessage.value = false;
	}, 3000);
};


</script>

<template>
	<div class="w-full flex-col max-w-[1300px] flex justify-center mx-auto">
		<main class="flex w-full flex-col md:flex-row items-center justify-between">
			<div class="flex flex-col w-full md:w-4/6 mt-[32px] sm:mt-[64px] mx-auto items-center sm:items-start">
				<div class="text-[40px] sm:text-[64px] text-center sm:text-left font-extrabold text-[#e0e0e0]">
					{{ $t("home.hi") }}, {{ $t("home.im") }}
					<h1 class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-deg-peach to-deg-purple">
						Larissa Avila
					</h1>
				</div>
				<p
					class="flex items-center text-center sm:text-left sm:items-start w-auto text-[#e0e0e0] font-semibold text-[28px] sm:text-[44px]">
					{{ $t("home.developer") }} {{ $t("home.ninja") }}.
				</p>

				<p class="w-full text-[#9FA1A4] mt-[24px] text-[17px] sm:text-[20px] font-light text-center sm:text-left">
					{{ $t("home.abstract") }}
				</p>

				<div class="flex w-full justify-center sm:justify-start my-[36px] sm:my-[64px]">
					<AppButton :isRoute="true" :to="Tr.i18nRoute({ name: 'experience' })" color="peach" size="lg"
						class="mr-[24px] sm:mr-[48px]">{{
							$t("home.btnExperience") }}
					</AppButton>

					<AppButton :isRoute="true" :to="Tr.i18nRoute({ name: 'about' })" color="pink" size="lg"
						class="mr-[24px] sm:mr-[48px]">{{
							$t("home.btnAbout") }}
					</AppButton>
				</div>

				<AppContact @clickOnEnvelope="copyEmailToClipboard" />
			</div>

			<div class="w-full md:w-2/6 h-full my-[60px] pb-[48px] md:pb-0 md:my-0">
				<CircleImage />
			</div>
		</main>

		<AppToaster :show="showMessage" />
	</div>
</template>
