AOS.init();


const btnClose = document.querySelector('.close')
const popUp = document.querySelector('.pop-up')
const cards = document.querySelectorAll('.wish__card')
const video = document.querySelector('.pop-up video')

cards.forEach(card => {
	card.onclick = () => {
		popUp.classList.add('open')
		video.src = `./img/wish/${card.id}.mp4`
		video.play()
	}
})

btnClose.onclick = () => {
	video.pause()
	popUp.classList.remove('open')
}
