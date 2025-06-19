<script setup>
import { ref } from "vue";
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
const email = 'lariicsa@gmail.com'
const showMessage = ref(false)

const copyEmail = () => {
	showMessage.value = true
	setTimeout(() => {
		showMessage.value = false;
	}, 3000)
}

</script>

<template>
	<div class="w-full flex-col max-w-[1300px] flex  mx-auto h-full min-h-full-std">
		<main class="flex w-full flex-col md:flex-row items-center justify-between">
			<div class="flex flex-col w-full lg:w-8/12 mt-[32px] sm:mt-[64px] mx-auto items-center sm:items-start">
				<div class="text-[40px] lg:text-[64px] text-center sm:text-left font-extrabold text-[#e0e0e0] dark:text-white">
					{{ $t("home.hi") }}, {{ $t("home.im") }}
					<h1 class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-deg-peach to-deg-purple">
						Larissa Avila
					</h1>
				</div>
				<p
					class="flex items-center text-center sm:text-left sm:items-start w-auto text-[#e0e0e0] font-semibold text-[24px] lg:text-[44px]">
					{{ $t("home.developer") }}.
				</p>

				<p class="w-full text-[#9FA1A4] dark:text-white mt-[24px] text-[17px] sm:text-[20px] font-light text-center sm:text-left">
					{{ $t("home.abstract") }}
				</p>

				<div class="flex w-full justify-center sm:justify-start my-[36px] sm:my-[64px]">
					<AppButton :isRoute="true" :to="Tr.i18nRoute({ name: 'experience' })" color="peach" size="lg"
						class="mr-[18px] lg:mr-[36px]">
						{{ $t("home.btnExperience") }}
					</AppButton>

					<AppButton :isRoute="true" :to="Tr.i18nRoute({ name: 'about' })" color="pink" size="lg"
						class="mr-0 sm:mr-[48px]">{{
							$t("home.btnAbout") }}
					</AppButton>
				</div>
				<AppContact @clickOnEnvelope="copyEmail(email)" />
			</div>

			<div class="w-full md:w-4/12 h-full my-[60px] pb-[8px] md:pb-0 md:my-0">
				<CircleImage />
			</div>
		</main>

		<AppToaster :show="showMessage">
			{{ $t("shared.copyEmail") }}
		</AppToaster>
	</div>
</template>
