AOS.init();


const btnClose = document.querySelector('.close')
const popUp = document.querySelector('.pop-up')
const cards = document.querySelectorAll('.wish__card')
const video = document.querySelector('.pop-up video')
const audioWish = document.querySelector('.wish_audio')

audioWish.volume = 0.5

cards.forEach(card => {
	card.onclick = () => {
		audioWish.volume = 0.04;
		popUp.classList.add('open')
		video.src = `./img/wish/${card.id}.mp4`
		video.play()
	}
})

btnClose.onclick = () => {
	video.pause()
	popUp.classList.remove('open')
	audioWish.volume = 0.5;
}


