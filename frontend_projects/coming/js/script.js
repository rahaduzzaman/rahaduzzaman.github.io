$(function() {
	$('[data-toggle="tooltip"]').tooltip({
		trigger : 'manual'
	}).tooltip('show');
});

$(window).scroll(function() {
	// if($( window ).scrollTop() > 10){   scroll down abit and get the action
	$(".progress-bar").each(function() {
		each_bar_width = $(this).attr('aria-valuenow');
		$(this).width(each_bar_width + '%');
	});

	//  }

	/*==============
	 * map
	 ===============*/
	$(function () {
    $('#gmap')
      .gmap3({
        address: "Haltern am See, Weseler Str. 151",
        zoom: 6,
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
	
	
	// new Maplace({
	// show_markers : true,
	// locations : [{
	// lat : 23.8103,
	// lon : 90.4125,
	// zoom : 8
	// }]
	// }).Load();
});

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
	if ($(".navbar").offset().top > 50) {
		$(".navbar-fixed-top").addClass("top-nav-collapse");
	} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop : $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

// Date time counter
$(".DateCountdown").TimeCircles({
	"animation" : "smooth",
	"bg_width" : 0.5,
	// "fg_width" : 0.013333333333333334,
	"fg_width" : 0.043333333333333334,
	"circle_bg_color" : "#ffffff",
	"time" : {
		"Days" : {
			"text" : "Days",
			"color" : "#51DACF",
			"show" : true
		},
		"Hours" : {
			"text" : "Hours",
			"color" : "#51DACF",
			"show" : true
		},
		"Minutes" : {
			"text" : "Minutes",
			"color" : "#51DACF",
			"show" : true
		},
		"Seconds" : {
			"text" : "Seconds",
			"color" : "#51DACF",
			"show" : true
		}
	}
});
