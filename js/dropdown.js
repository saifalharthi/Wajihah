;(function( $ ) {
  $.fn.dropdown = function(options) {
  
  	if (window.innerWidth > 960) {
  		return;
  	} else {

	  	this.click(function() {
	  		var parent = $(this).parent(),
	    		targetSelector = $(parent).attr('data-dropdown'),
	    		target = $(parent).find(targetSelector).eq(0);


	    	if (!$(target).hasClass('is-shown')) {
	    		$(target).addClass('is-shown');
	    		$('.is-shown').animate({left: 0}, 200);

	    	}else {
	    		$(target).removeClass('is-shown');
	    	}
	    });

	    $('.dropdown-back').click(function() {
	    	var parent = $(this).parent();
	    	$(parent).removeClass('is-shown');
	    	$(parent).animate({left: '100%'}, 200);
	    });
  	}
    


  };
})( jQuery );