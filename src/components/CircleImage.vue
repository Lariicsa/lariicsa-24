<script setup>
import { RouterLink } from "vue-router"
import { useI18n } from "vue-i18n";
import Tr from "@/i18n/translation";
</script>
<template>
	<RouterLink :to="Tr.i18nRoute({ name: 'experience' })"
		class="relative flex justify-center items-center w-[160px] h-[160px] lg:w-[280px] lg:h-[280px] mx-auto active:sepia sm:hover:sepia">
		<div
			class="rounded-full flex justify-center items-center bg-gradient-to-r from-[#F89E7B] to-[#C5A9F3] w-[108px] h-[108px] lg:w-[180px] lg:h-[180px] mx-auto absolute left-auto top-auto z-[2]">
			<div class="rounded-full w-[92%] h-[92%] bg-cover" style="background-image: url(home_me.jpg)"
				alt="Larissa picture"></div>
		</div>
		<div class="w-[156px] h-[156px] lg:w-[248px] lg:h-[248px] rotate absolute left-auto top-auto z-0">
			<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
				<path id="circlePath" d="M 10, 50 a 40,40 0 1,1 80,0 40,40 0 1,1 -80,0" />
				<text>
					<textPath href="#circlePath">
						A good frontend makes more friends ·
					</textPath>
				</text>
			</svg>
		</div>
	</RouterLink>
</template>
<style scoped>
path#circlePath {
	fill: transparent;
}

text {
	fill: #f1f1f0;
	font-size: 6px;
	text-transform: uppercase;
	letter-spacing: 3px;
	font-weight: 200;

}

.rotate {
	-webkit-animation: rotate 36s normal linear infinite;
	animation: rotate 36s normal linear infinite;
}

@keyframes rotate {
	0% {
		-webkit-transform: rotate3d(0, 0, 1, 0deg);
		transform: rotate(0, 0, 1, 0deg);
	}

	25% {
		-webkit-transform: rotate3d(0, 0, 1, 90deg);
		transform: rotate(0, 0, 1, 90deg);
	}

	50% {
		-webkit-transform: rotate3d(0, 0, 1, 180deg);
		transform: rotate(0, 0, 1, 180deg);
	}

	75% {
		-webkit-transform: rotate3d(0, 0, 1, 270deg);
		transform: rotate3d(0, 0, 1, 270deg);
	}

	100% {
		-webkit-transform: rotate3d(0, 0, 1, 360deg);
		transform: rotate3d(0, 0, 1, 360deg);
	}
}
</style>
