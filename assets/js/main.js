/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav'),
		$nav_a = $nav.find('a'),
		$nav_height = $nav.outerHeight();
		$articles = $('.articles > *');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
			$(window).trigger('scroll');
		});
	
	// Click on nav link or button.
	$body.find('a').on('click', function () {
		
		if ($(this).attr('href').charAt(0) != '#')
			return;
		
		var id = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - $nav_height
		}, 1000);
 
		return false;
	});
	
	// Scroll site.
	$(window).scroll(function() {
		
		var currentPosition = $(this).scrollTop();
		$articles.each(function() {
			var top = $(this).offset().top - $nav_height,
				bottom = top + $(this).outerHeight();
			
			if ((currentPosition + 1) >= top && currentPosition <= bottom) {
				$nav_a.removeClass('active');
				var $id = $(this).attr('id');
				$nav.find('a[href ="#' + $id +'"]').addClass('active');
			}
		});
	});

})(jQuery);