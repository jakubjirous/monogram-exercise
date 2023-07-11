/**
 * Observe element on scroll and show/hide certain class name
 * @param className
 * @param toggleClass
 */
export const observeElements = (className: string, toggleClass: string) => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add(toggleClass);
			} else {
				entry.target.classList.remove(toggleClass);
			}
		});
	});

	const elements = document.querySelectorAll(`.${className}`);
	elements.forEach((el) => observer.observe(el));
};
