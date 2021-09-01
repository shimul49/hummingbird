document.addEventListener("DOMContentLoaded", function () {

	el_autohide = document.querySelector('.autohide');

	// add padding-top to bady (if necessary)
	navbar_height = document.querySelector('.navbar').offsetHeight;
	document.body.style.paddingTop = navbar_height + 'px';

	if (el_autohide) {

		var last_scroll_top = 0;
		window.addEventListener('scroll', function () {
			let scroll_top = window.scrollY;
			if (scroll_top < last_scroll_top) {
				el_autohide.classList.remove('scrolled-down');
				el_autohide.classList.remove('hide');
				el_autohide.classList.add('scrolled-up');
				//el_autohide.classList.add('hide');
			}
			else {
				el_autohide.classList.remove('scrolled-up');
				el_autohide.classList.add('scrolled-down');
			}
			last_scroll_top = scroll_top;
		});
	}

	let anchor = document.getElementsByClassName('nav-link');
	for( let anc of anchor ) {
		anc.addEventListener('click', function(e) {
			// e.preventDefault();
			// let href = anc.getAttribute('href');
			// console.log(href);
			setTimeout( function() {
				el_autohide.classList.add('hide');
			}, 1000);
		});
	}
});

var slider = tns(
	{
		"container": "#tiny-slider",
		"items": 3,
		"gutter": 10,
		"swipeAngle": false,
		"speed": 400,
		"nav": false,
		"autoplay": true,
		"speed": 400,
		"loop": true,
		"autoplayButtonOutput": false,
		"controls": false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				gutter: 30,
				items: 2
			},
			900: {
				items: 3
			}
		}
	}
)



// Animating Hero Section

var tl1 = gsap.timeline({
	defaults: {
		duration: .7,
		ease: Back.easeOut.config(2),
		opacity: 0
	}
})
var tl2 = gsap.timeline({
	defaults: {
		duration: 1.5,
		delay: 1
	}
})
var tl3 = gsap.timeline({
	defaults: {
		duration: 1
	}
})


tl1.from(".hero-card-bg", {
	delay: 1,
	scale: .2,
	transformOrigin: 'center',
}, "=.2")
	.from(".card-top", {
		scaleY: 0,
		transformOrigin: "top"
	})
	.from(".icon", {
		scale: 0.2,
		transformOrigin: "center"
	}, "-=.7")
	.from(".blip1", {
		scaleX: 0
	})
	.from(".blip2", {
		scaleX: 0
	}, "-=.2")
	.from(".blip3", {
		scaleX: 0
	}, "-=.3")
	.from(".blip4", {
		scaleX: 0
	}, "-=.5")
	.from(".blip5", {
		scaleX: 0
	}, "-=.7");

tl2.to(".whole-card", {
	y: 10,
	repeat: -1,
	yoyo: true
})

tl3.from(".hero-content", {
	delay: 1,
	opacity: 0,
	y: 40,
	stagger: 0.3
})