<script setup>
import AppTag from "@/components/AppTag.vue";
import { useI18n } from "vue-i18n";
import Tr from "@/i18n/translation";
const { t, tm, rt, locale } = useI18n();

defineProps({
	items: {
		type: Object,
		default: () => { },
	},
});
</script>
<template>
	<div v-for="item in items" :key="item.id"
		class="flex shadow-md flex-col items-center bg-white dark:bg-black w-full sm:w-[672px] h-auto sm:max-h-[344px] rounded-lg border border-[#CED7E5] px-[24px] sm:px-[24px] py-[24px] mb-[104px] last:mb-0 relative">
		<div
			class="ball flex w-[20px] h-[20px] rounded-full bg-[#F0BAEE] absolute left-auto sm:left-[-172px] top-[-64px] sm:top-[-1px] z-[2]">
			<span
				class="tlt flex-grow w-[4px] h-[42px] bg-gradient-to-b from-[#F8B9EE] to-[#FFF0CB] absolute left-[8px] bottom-[20px] z-0"
				:class="item.date === 'current' ? 'hidden' : 'flex sm:hidden'" aria-label="date">
			</span>
			<div
				class="flex w-[80px] text-[#F0BAEE] text-[12px] sm:text-[14px] font-semibold capitalize absolute top-[2px] sm:top-0 left-[32px] z-[3]">
				{{ item.date }}
			</div>
			<span
				class="tlb flex sm:hidden flex-grow w-[4px] h-[44px] bg-gradient-to-b from-[#F8B9EE] to-[#FFF0CB] absolute left-[8px] top-[20px] z-0">
			</span>
		</div>

		<h3 class="text-[#373737] dark:text-white font-bold text-[22px] sm:text-[26px] my-0">
			{{ item.title }}
		</h3>
		<a :href="item.joblink" target="_blank"
			class="text-[#3684d2] dark:text-white text-[20px] underline sm:text-[18px] font-semibold text-center active:text-[#0a479d] my-[4px] sm:hover:text-[#0a479d]"
			role="link">
			{{ item.subtitle }}
		</a>
		<p class="text-[14px] sm:text-[16px] text-[#51576E] dark:text-white text-center w-auto my-[8px] sm:my-[8px]">
			{{ item.abstract }}
		</p>
		<hr class="border-0 h-[1px] bg-[#EAEAEA] w-full my-[8px]" />
		<div class="flex justify-around items-center flex-wrap">
			<AppTag v-for="skill in item.skills" :key="skill.id">{{ skill }}</AppTag>
		</div>
	</div>

</template>
