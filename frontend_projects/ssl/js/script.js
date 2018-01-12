$(document).ready(function() {
	
	
	
	
	/* ============================================
 	=== Clennts :: Owl
 	==============================================*/
	$(document).ready(function() {
		$('.clients-say').owlCarousel({
			center: true,
			loop : true,
			nav: true,
			navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
			autoHeight : false,
			items : 2,
			smartSpeed : 500,
			/*autoplay : true,*/
			autoplayTimeout : 1000, 
			autoplayHoverPause: true, 
			responsive:{
		        320:{
		            stagePadding : 10,
		            margin : 10,
		        },
		        640:{
		            stagePadding : 20,
		            margin : 20
		        },
		        1024:{
		             stagePadding : 50,
		             margin : 50
		        }
		    }
		});
	});

	$(document).ready(function() {
		$('.clients').owlCarousel({
			/*stagePadding: 20,*/
			/*loop : true,*/
			/*nav: true,
			 navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],*/
			autoHeight : true,
			/*smartSpeed : 600,
			 autoplay : true,
			 autoplayTimeout : 3000
			 /*autoplayHoverPause: true*/
			responsive:{
		        320:{
		        	items : 2, 
		        	margin : 10,
		        	stagePadding: 10
		        },
		        480:{
		            items : 3, 
		        	margin : 20,
		        	stagePadding: 20
		        },
		        640:{
		            items : 3, 
		        	margin : 30,
		        	stagePadding: 30
		        },
		        1024:{
		             items : 5, 
		        	margin : 50,
		        	stagePadding: 20
		        }
		    }
		});

		$(function() {
    
    $(".button").on("click", function( e ) {
        
        e.preventDefault();
    
        $("body, html").animate({ 
            scrollTop: $( $(this).attr('href') ).offset().top 
        }, 600);
        
    });
        
});

		
	});
	
	
	

});
