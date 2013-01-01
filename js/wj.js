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

	});
}(jQuery, window, document));


