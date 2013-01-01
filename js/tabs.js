;(function( $, window, document, undefined ) {

$(document).ready(function() {


  $('.tabs>dd').click(function() {

    var target = $(this).find('a').attr('href');

    if( !$(this).hasClass('active') && !($(target).hasClass('active')) ) {
      
      $('.tabs>.active').removeClass('active');
      $('.tabs-content>.active').removeClass('active');

      $(this).addClass('active');
      $(target).addClass('active').fadeIn();


    }
  });
})

})( jQuery, window, document );
