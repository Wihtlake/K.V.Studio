// 3D Scroll


let zSpacing = -1100, //расстояние от обьектов
		lastPos = zSpacing / 6,//стартовая позиция
		$frames = document.getElementsByClassName('frame'),
		frames = Array.from($frames),
		zVals = []

window.onscroll = function() {

	let top = document.documentElement.scrollTop,
			delta = lastPos - top

	lastPos = top

	frames.forEach(function(n, i) {
		zVals.push((i * zSpacing) + zSpacing)
		zVals[i] += delta * -7.5 //величина скролла
		let frame = frames[i],
				transform = `translateZ(${zVals[i]}px)`,
				opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})

}

window.scrollTo(0, 1)





const button_bg = document.getElementsByClassName('block_menu');
const line_bg = document.getElementsByClassName('menu_1');
const container_bg = document.getElementsByClassName('burder_main_container'); 



// клик по кнопке бургера
button_bg[0].addEventListener('click', function() {
	container_bg[0].classList.toggle('blur');
	container_bg[0].classList.toggle('none_blur');

	button_bg[0].classList.toggle('active');
	
	window.scrollTo(0,0); 
});


// анимация логотипа
// let bg = document.querySelector('.animate_mouse');
// window.addEventListener('mousemove', function(e) {
//     let x = e.clientX / window.innerWidth;
//     let y = e.clientY / window.innerHeight;  
//     bg.style.transform = 'skew(+' + x * 2 + 'deg, -' + y * 2 + 'deg)';
// });



