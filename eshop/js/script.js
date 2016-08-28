$(document).ready(function() {
	
	$('.new-product').owlCarousel({
		/*stagePadding: 20,*/
		/*loop : true,*/
		mouseDrag : true,
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
				items : 1,
				margin : 5,
				stagePadding : 10
			},
			480 : {
				items : 1,
				margin : 7.5,
				stagePadding : 20
			},
			640 : {
				items : 2,
				margin : 10,
				stagePadding : 30
			},
			1024 : {
				items : 3,
				margin : 20,
				stagePadding : 20
			}
		}
	});
	//feature product carousel
	$('.feature-slider').owlCarousel({
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
				items : 1,
				margin : 5,
				stagePadding : 10
			},
			480 : {
				items : 1,
				margin : 7.5,
				stagePadding : 20
			},
			640 : {
				items : 2,
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
	
}); 