;(function($, window, document, undefined) {
	$(document).ready(function() {

		// close em all
		$('.close').click(function() {
			$(this).parent().fadeOut();
		});

		// flash alert
		setTimeout(function(){
			$('.flash-alert').fadeOut();
		}, 2000);

		// if screen is small then hide navigation cuz we are cool boys!
		if(window.innerWidth < 960) {
			$('.navigation').hide();
		}

		// show navigation elements cuz user want em
		$('.collapse').click(function(){

			var target = $(this).attr('data-collapse');

			if (!$(target).hasClass('is-not-collapsed') ) {

				$(target).addClass('is-not-collapsed');
			}else {
				$(target).removeClass('is-not-collapsed');
			}

		});


		$('.tabs>dd').click(function() {

		    var target = $(this).attr('data-tabs-target');

		    if( !$(this).hasClass('active') && !($(target).hasClass('active')) ) {
		      
		      $('.tabs>.active').removeClass('active');
		      $('.tabs-content>.active').removeClass('active');

		      $(this).addClass('active');
		      $(target).addClass('active').fadeIn();


		    }
		  });

	});

	console.log('اذا عندك مشاكل كلمني بتويتر http://twitter.com/lafikl');
}(jQuery, window, document));


