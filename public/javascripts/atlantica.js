jQuery(document).ready(function(){

  jQuery('#mailer').validate();


	// Dropdown Script	   
	function mainmenu(){
	jQuery(" #nav ul ").css({display: "none"}); // Opera Fix
	jQuery(" #nav li").hover(function(){
			jQuery(this).find('ul:first').css({visibility: "visible",display: "none"}).show(400);
			},function(){
			jQuery(this).find('ul:first').css({visibility: "hidden"});
			});
	}
	
	 jQuery(document).ready(function(){					
		mainmenu();
	});
 
	// Activate PrettyPhoto Lightbox handle
	jQuery("a[rel^='gallery']").prettyPhoto();
	
	// PNG Fix
	jQuery(document).pngFix(); 	
	
	// Activate jCarousel
	function mycarousel_initCallback(carousel)
	{
    	// Disable autoscrolling if the user clicks the prev or next button.
    	carousel.buttonNext.bind('click', function() {
    	    carousel.startAuto(0);
    	});
		
    	carousel.buttonPrev.bind('click', function() {
    	    carousel.startAuto(0);
    	});
		
    	// Pause autoscrolling if the user moves with the cursor over the clip.
    	carousel.clip.hover(function() {
    	    carousel.stopAuto();
    	}, function() {
    	    carousel.startAuto();
    	});
	};


    	jQuery('#mycarousel').jcarousel({
    	    auto: 4,
    	    scroll: 2,
    	    wrap: 'last',
    	    animation: 'normal',
    	    initCallback: mycarousel_initCallback
    });

});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-265870-19']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
})();
