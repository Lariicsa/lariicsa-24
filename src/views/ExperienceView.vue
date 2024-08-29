<!-- @format -->

<script setup>
import { computed, ref, toRaw } from "vue";
import AppTimeline from "@/components/AppTimeline.vue";
import JobCard from "@/components/JobCard.vue";
import experience from '@/data/experience'
import { useI18n } from "vue-i18n";
import Tr from "@/i18n/translation";


const { t, tm, rt, locale } = useI18n();
const supportedLocales = Tr.supportedLocales;
const experiences = experience


</script>
<template>
	<div class="flex mx-auto flex-col">
		<h1 class="mt-[56px] text-[44px] text-[#E5E5E5] text-center font-semibold">
			{{ $t("experience.title") }}
		</h1>


		<div class="flex justify-between h-auto w-full max-w-[1230px] mt-[84px] sm:mt-[64px] mb-[100px]">
			<AppTimeline />
			<div class="flex flex-col w-full">
				<JobCard :items="experiences" />
			</div>
		</div>
	</div>
</template>
