$(document).ready(function() {

	//slider
	//carousel
	$('.owl').owlCarousel({
		/*stagePadding: 20,*/
		/*loop : true,*/
		mouseDrag : false,
		dots : false,
		nav : true,
		navText : ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
		/*autoHeight : true,
		 smartSpeed : 600,
		 autoplay : true,
		 autoplayTimeout : 3000
		 /*autoplayHoverPause: true*/
		responsive : {
			320 : {
				items : 2,
				margin : 5,
				stagePadding : 10
			},
			480 : {
				items : 3,
				margin : 7.5,
				stagePadding : 20
			},
			640 : {
				items : 3,
				margin : 10,
				stagePadding : 30
			},
			1024 : {
				items : 4,
				margin : 20,
				stagePadding : 20
			}
		}
	});

	/*
	  Fancybox
	 */
	$('.fancybox').fancybox();

			/*
			 *  Different effects
			 */

			// Change title type, overlay closing speed
			$(".fancybox-effects-a").fancybox({
				helpers: {
					title : {
						type : 'outside'
					},
					overlay : {
						speedOut : 0
					}
				}
			});




	/*=====map====*/
	var map;
function initialize() {
  
  var mapOptions = {
    zoom: 14,
                        zoomControl: true,
                        scrollwheel: true,
                        zoomControlOptions: {
                            style: google.maps.ZoomControlStyle.SMALL
                        },
                        mapTypeControl: false,
                        scaleControl: false,
                   
                        streetViewControl: false,
                        draggable: true,
                        center: new google.maps.LatLng(23.810332, 90.412518),
                        

  };

  map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);

});
