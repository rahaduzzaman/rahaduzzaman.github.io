// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {

	new WOW().init();
	
	/* -------------------------------
	Scroll Down Button
	----------------------------------*/
	
	$(function() {
		$('a[href*=#]').on('click', function(e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop : $($(this).attr('href')).offset().top
			}, 660, 'linear');
		});
	});

	
	/* -------------------------------
	slider Text rotator 
	----------------------------------*/

	$(".js-rotating").Morphext({
		// The [in] animation type. Refer to Animate.css for a list of available animations.
		animation : "fadeIn",
		// An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
		separator : ",",
		// The delay between the changing of each phrase in milliseconds.
		speed : 2000,
		complete : function() {
			// Called after the entrance animation is executed.
		}
	});

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
	
	
		/* -------------------------------
		 This is for parallax slider effect
		 ----------------------------------*/

	(function($) {
		// Init Skrollr
		var s = skrollr.init({
			render : function(data) {
				//Debugging - Log the current scroll position.
				//console.log(data.curTop);
			}
		});
	} )(jQuery);
	
	/* -------------------------------
	This is for circle Progress
	----------------------------------*/

	$('.circle1').circleProgress({
		size : 150,
		fill : {
			gradient : ["black"]
		}
	});
	
	/* -------------------------------
	// Client Speech slider carousel
	----------------------------------*/
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
	
	// Back to top API
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	/*==============
	 * map
	 ===============*/
	$(function () {
    $('#gmap')
      .gmap3({
        address: "Mirpur, Dhaka, 1216",
        zoom: 12,
        marker: true,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      })
      .marker(function (map) {
        return {
          position: map.getCenter(),
          icon: 'http://maps.google.com/mapfiles/marker_green.png'
        };
      })
        .on('click', function (marker, event) {
          marker.setIcon('http://maps.google.com/mapfiles/marker_orange.png');
          setTimeout(function () {
            marker.setIcon('http://maps.google.com/mapfiles/marker_green.png');
          }, 200);
        })
    ;
  });

});
