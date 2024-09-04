<!-- @format -->

<script setup>
import { computed, ref, toRaw, onMounted } from "vue";
import AppTimeline from "@/components/AppTimeline.vue";
import JobCard from "@/components/JobCard.vue";
import experience from '@/data/experience'
import { useI18n } from "vue-i18n";
import Tr from "@/i18n/translation";

const { t, tm, rt, locale } = useI18n();
const supportedLocales = Tr.supportedLocales;
const experiences = experience


onMounted(() => {

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				const intersecting = entry.isIntersecting;

				entry.target.style.opacity = !intersecting ? '0' : '1';
				entry.target.style.transform = !intersecting ? 'translateX(-300px)' : 'translateX(0)';
				entry.target.style.transition = !intersecting ? 'none' : 'all 0.7s ease-out';
				entry.target.style.transitionDelay = !intersecting ? '0' : '0.4s';
			}
		},
		// 👇 Threshold is 100%
		{ threshold: 0.5 }

	);

	const boxes = document.querySelectorAll('.lacard');

	boxes.forEach((box, i) => { observer.observe(box); })

});
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

<style>
/* .lacard  {
	opacity: 1;
	transform: translateX(0);
} */

/* .lacard {
opacity: 0;
	transform: translateX(-300px);
	transition: all 0.7s ease-out;
	transition-delay: 0.4s;
} */
</style>
