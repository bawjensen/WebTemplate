// $.fn.visibilityFadeIn = function(time) {
// 	$(this).css({opacity: 0.0, visibility: 'visible'}).animate({opacity: 1.0}, time);
// }

function startAnimation() {
	var logo = $('#BMG-logo');
	var motto = $('#BMG-motto');
	var enterLink = $('#BMG-enter');

	enterLink.height(50);
	enterLink.width(120);
	
	var faders = [logo, motto, enterLink];

	console.log(enterLink.width());

	var i = -1;
	$.each(faders, function(index, value) {
		var vertShift = i * 75;
		value.css('position', 'fixed');
		value.css('left', '50%');
		value.css('top', '50%');
		value.css('margin-left', -1 * value.width()/2 + 'px');
		value.css('margin-top', -1 * (value.height()/2 - vertShift) + 'px');
		i++;
	});

	var timeDelay = 3000;
	var timeIn = timeDelay * 1 / 4;
	var timeOut = timeDelay - timeIn;

	logo.fadeIn(timeIn);
	motto.delay(timeDelay).fadeIn(timeIn);
	enterLink.delay(timeDelay*2).fadeIn(timeIn);

	enterLink.click(function() {
		$('body *:not(.intro-splash)').fadeIn(500).removeAttr('style');
		$.each(faders, function(index, value) {
			value.removeAttr('style');
		});
	});
}

function introAnimation() {
	$('body *').hide(); // Hide site before the intro.

	var loadedImages = [];
	var allLoaded = false;

	$('.intro-img').load(function() {
		if ( $.inArray(this, loadedImages) == -1 ) {
			loadedImages.push(this);
		}
		if (loadedImages.length >= 2 && !allLoaded) {
			allLoaded = true;
			startAnimation();
		}
	}).each(function() {
		if (this.complete) { $(this).load(); }
	});
}

$(function() {
	// introAnimation();
});
