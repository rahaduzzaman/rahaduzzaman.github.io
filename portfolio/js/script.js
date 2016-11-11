// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
	
	new WOW().init();
	
	
	var MQL = 1170;

	//primary navigation slide-in effect
	if ($(window).width() > MQL) {
		var headerHeight = $('.navbar-custom').height();
		$(window).on('scroll', {
			previousTop : 0
		}, function() {
			var currentTop = $(window).scrollTop();
			//check if user is scrolling up
			if (currentTop < this.previousTop) {
				//if scrolling up...
				if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
					$('.navbar-custom').addClass('is-visible');
				} else {
					$('.navbar-custom').removeClass('is-visible is-fixed');
				}
			} else if (currentTop > this.previousTop) {
				//if scrolling down...
				$('.navbar-custom').removeClass('is-visible');
				if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed'))
					$('.navbar-custom').addClass('is-fixed');
			}
			this.previousTop = currentTop;
		});
	}
	// This is for parallax slider effect
	(function($) {
		// Init Skrollr
		var s = skrollr.init({
			render : function(data) {
				//Debugging - Log the current scroll position.
				//console.log(data.curTop);
			}
		});
	} )(jQuery);
	
	// This is for circle Progress
	$('.circle1').circleProgress({
		size : 150,
		fill : {
			gradient : ["black"]
		}
	});

	// Client Speech slider carousel
	var cls = $('.owl-carousel');
	cls.owlCarousel({
		loop : true,
		nav : false,
		dots : true,
		autoHeight : true,
		responsive : {
			0 : {
				items : 1
			},
			600 : {
				items : 1
			},
			960 : {
				items : 1
			},
			1200 : {
				items : 1
			}
		}
	});

	//Animated Number
	//Animated Number
	$.fn.animateNumbers = function(stop, commas, duration, ease) {
		return this.each(function() {
			var $this = $(this);
			var start = parseInt($this.text().replace(/,/g, ""));
			commas = (commas === undefined) ? true : commas;
			$({
				value : start
			}).animate({
				value : stop
			}, {
				duration : duration == undefined ? 1000 : duration,
				easing : ease == undefined ? "swing" : ease,
				step : function() {
					$this.text(Math.floor(this.value));
					if (commas) {
						$this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
					}
				},
				complete : function() {
					if (parseInt($this.text()) !== stop) {
						$this.text(stop);
						if (commas) {
							$this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
						}
					}
				}
			});
		});
	};

	$('.animated-number').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		var $this = $(this);
		if (visible) {
			$this.animateNumbers($this.data('digit'), false, $this.data('duration'));
			$this.unbind('inview');
		}
	});

});
