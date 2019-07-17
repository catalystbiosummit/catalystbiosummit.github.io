// TOGGLE HAMBURGER & COLLAPSE NAV
$('.nav-toggle').on('click', function() {
	$(this).toggleClass('open');
	$('.menu-left').toggleClass('collapse');
});

// REMOVE X & COLLAPSE NAV ON ON CLICK
$('.menu-left a').on('click', function() {
	$('.nav-toggle').removeClass('open');
	$('.menu-left').removeClass('collapse');
});

// Hide Header until scroll down on desktop
var didScroll;
var lastScrollTop = 0;
var delta = $(window).height();
var mobile = $(window).width() <= 568;

$(window).scroll(function(event){
	didScroll = true;
});

setInterval(function() {
	console.log(mobile, $(window).width);
	mobile = $(window).width() <= 568;
	if (didScroll && !mobile) {
		hasScrolled();
		didScroll = false;
	} else if (mobile) {
		$('nav').removeClass('hide-nav-menu').addClass('show-nav-menu');
	}
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();

	if (st > delta) {
		// Scroll Down below first load
		$('nav').removeClass('hide-nav-menu').addClass('show-nav-menu');
		$('.nav-toggle').removeClass('open');
		$('.menu-left').removeClass('collapse');
	} else {
		// Scroll Up above delta
		$('nav').removeClass('show-nav-menu').addClass('hide-nav-menu');
	}

	lastScrollTop = st;
}