$(window).scroll(function() {
		$('#armTickScroll').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+700) {
				$(this).addClass("armTickAnimate");
			}
		});
	});
	
$(window).scroll(function() {
	$('#armRashScroll').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+1200) {
			$(this).addClass("armRashAnimate");
		}
	});
});

$(window).scroll(function() {
	$('#armSpirocheteScrollOne').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+1200) {
			$(this).addClass("armSpirocheteAnimate");
		}
	});
});

$(window).scroll(function() {
	$('#armSpirocheteScrollTwo').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+1200) {
			$(this).addClass("armSpirocheteAnimate");
		}
	});
});

$(window).scroll(function() {
	$('#armSpirocheteScrollThree').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+1200) {
			$(this).addClass("armSpirocheteAnimate");
		}
	});
});


// ANALYSIS ANIMATIONS

$(window).scroll(function() {
	$('#increasingDescription').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+600) {
			$(this).addClass("revealIncreasingDescription");
		}
	});
	
	$('#increasingFilled').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+300) {
			$(this).addClass("graphIncreasingFillAnimation");
		}
	});
	
	$('#descreasingDescription').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("revealDecreasingDescription");
		}
	});
	
	$('#oppositeDescription').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+600) {
			$(this).addClass("revealOppositeDescription");
		}
	});
	
	$('#oppositeFilled').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("graphOppositeFillAnimation");
		}
	});
	
	$('#percentageDescription').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+700) {
			$(this).addClass("revealPercentageDescription");
		}
	});
	
	$('#percentageFilled').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("graphPercentageFillAnimation");
		}
	});
	
}); 



// ALABAMA ANIMATIONS

$(window).scroll(function() {
	$('#individualAlabama').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+200) {
			$(this).addClass("alabamaStateAnimation");
		}
	});
	
	$('#sliderBarAnimation').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+200) {
			$(this).addClass("elevenToTwelveAnimation");
		}
	});
	
	
	
});