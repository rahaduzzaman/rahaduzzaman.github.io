

/* ----- Navbar shrink on scroll ----*/
//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-brand img").css({"height": "40px", "margin-top": "-10px", "transition": "all 0.5s ease-in-out"});
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-brand img").css({"height": "60px", "transition": "all 0.5s ease-in-out"});
    }
});/* ----- Navbar end shrink ----*/

	 /* ----- Casousel for advertise ----*/
	 
$(document).ready(function(){

  $('.adv-carousel').slick({
    dots: false,
     loop: true,
     speed: 300,
     arrows: true,
     adaptiveHeight: true,
     nextArrow: '<i class="fa fa-chevron-right"></i>',
      prevArrow: '<i class="fa fa-chevron-left"></i>',
     slidesToShow: 1,
     slidesToScroll: 2,
  });

  // sale item carousel
  $('#sale-items,.brand').slick({
    dots: true,
     loop: true,
     speed: 300,
     arrows: true,
     adaptiveHeight: true,
     slidesToShow: 4,
     slidesToScroll: 2,
     responsive: [{

           breakpoint: 991,
           settings: {
             slidesToShow: 3,
             infinite: true
           }

         }, {

           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             dots: true
           }

         }]
  });


  /* ----- Video ----*/
  jQuery("a.video-frame").YouTubePopUp();
	/* ----- parallax background----*/
	 // $('.para').parallax("50%", 0.1);


	$('#product-items').mixItUp({
		selectors: {
		      filter: '.filter-1',
		    }
	});
	$('#sale-items').mixItUp({
		selectors: {
		      filter: '.filter-2',
		    }
	});


    $('.product-item').matchHeight();


});
