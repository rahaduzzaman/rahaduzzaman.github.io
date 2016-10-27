// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
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
		dots: true,
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


});
