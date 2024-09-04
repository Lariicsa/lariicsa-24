/** @format */

import { onMounted } from "vue";

export function IntersectionObserver(id) {
	return {
		onMounted() {
			const options = {
				root: null,
				threshold: 0,
				rootMargin: "0px",
			};
			const targetSection = document.getElementById(id);
			const observer = new IntersectionObserver(triggerAnimation, options);
			observer.observe(targetSection);
			function triggerAnimation(entries) {
				if (entries[0].isIntersecting) {
					targetSection.classList.add("unset");
				} else {
					targetSection.classList.remove("unset");
				}
			}
		},
	};
}
