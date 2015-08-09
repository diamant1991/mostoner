$('input,textarea').focus(function(){
  $(this).data('placeholder',$(this).attr('placeholder'))
  $(this).attr('placeholder','');
});
$('input,textarea').blur(function(){
  $(this).attr('placeholder',$(this).data('placeholder'));
});

$( document ).ready(function() {

  $('form').bind('submit', function(event) {
    $(this).find('[type=text]').each(function() {
      if(!$(this).val().length) { 
      event.preventDefault();
        $(this).addClass('error');
      }
      else{
        $(this).removeClass('error');
      }
    });
  });

	$('.click-modal').click(function(){
    	$('.form-mask').fadeIn(400);
    	$('.modal').fadeIn(400);
    })

    $('.form-mask').click(function(){
  	 $('.modal,.form-mask').fadeOut(400);
  })
	$(document).keyup(function(d) {
	    if (d.keyCode == 27) {
	        $('.form-mask').fadeOut(400);
	        $('.modal').fadeOut(400);
	    }
	});



});