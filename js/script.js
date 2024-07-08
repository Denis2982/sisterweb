AOS.init();

const progressCircle = document.querySelector('.autoplay-progress svg')
const progressContent = document.querySelector('.autoplay-progress span')

var swiper2 = new Swiper('.mySwiper', {
	grabCursor: true,
	effect: 'creative',
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	creativeEffect: {
		prev: {
			shadow: true,
			translate: ['-120%', 0, -500],
		},
		next: {
			shadow: true,
			translate: ['120%', 0, -500],
		},
	},
	on: {
		autoplayTimeLeft(s, time, progress) {
			progressCircle.style.setProperty('--progress', 1 - progress)
			progressContent.textContent = `${Math.ceil(time / 1000)}s`
		},
	},
})
