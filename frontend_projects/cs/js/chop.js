$(document).ready(function (){
	
	 $(".rotate").textrotator({
      animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
      separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
      speed: 3000 // How many milliseconds until the next word show.
    });
    
    //Wow Animates
    
    wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
  )
  wow.init();
    
    // Preloader
  $(window).load(function() {
    $(".preloader").delay(100).fadeOut(500);
  });
});