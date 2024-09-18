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
const isMobile = ref(/Mobi/i.test(window.navigator.userAgent))
const isMobileDevice = ref(false)


onMounted(() => {
	checkMobileDevice()


	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {

				const intersecting = entry.isIntersecting;

				if (isMobileDevice) {
					entry.target.style.opacity = !intersecting ? '0' : '1';
					entry.target.style.transform = !intersecting ? 'translateX(-10px)' : 'translateX(0)';
					entry.target.style.transition = !intersecting ? 'none' : 'all 0.7s ease-out';
					entry.target.style.transitionDelay = !intersecting ? '0' : '0.4s';
				} else {
					entry.target.style.opacity = !intersecting ? '0' : '1';
					entry.target.style.transform = !intersecting ? 'translateX(-400px)' : 'translateX(0)';
					entry.target.style.transition = !intersecting ? 'none' : 'all 0.7s ease-out';
					entry.target.style.transitionDelay = !intersecting ? '0' : '0.4s';
				}

			}
		},
		// 👇 Threshold is 100%
		{ threshold: 0.5 }
	);

	const boxes = document.querySelectorAll('.lacard');
	boxes.forEach((box, i) => { observer.observe(box); })

});

const checkMobileDevice = () => {
	const userAgent = window.navigator.userAgent
	const mobileKeywords = [
		'Android',
		'webOS',
		'iPhone',
		'iPad',
		'iPod',
		'BlackBerry',
		'Windows Phone',
	]

	isMobileDevice.value = mobileKeywords.some(keyword => userAgent.includes(keyword))
}



</script>


<template>
	<div class="flex mx-auto flex-col">
		<h1 class="mt-[56px] text-[44px] text-[#E5E5E5] text-center font-semibold">
			{{ $t("experience.title") }} {{ isMobileDevice }}
		</h1>

		<div class="flex justify-between h-auto w-full max-w-[1230px] mt-[84px] sm:mt-[64px] mb-[100px]">
			<AppTimeline />
			<div class="flex flex-col w-full">
				<JobCard :items="experiences" :isMobile="isMobileDevice" />
			</div>
		</div>
	</div>
</template>
