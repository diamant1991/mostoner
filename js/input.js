var mydivs=new Array('.individual','.legal');

function opcl(arr, e){
    if ($(e).css('display') == 'none'){
        for(var i in arr){   
           $(arr[i]).hide();
        }
        $(e).show();       
    }
}


// RadioButton
$('.radioblock').find('.radio').each(function(){
	$(this).click(function(){
		var valueRadio = $(this).html();
		$(this).parent().find('.radio').removeClass('active');
		$(this).addClass('active');
		$(this).parent().find('input').val(valueRadio);
	});
});

// Select
$('.slct').click(function(){
	var dropBlock = $(this).parent().find('.drop');

	if( dropBlock.is(':hidden') ) {
		dropBlock.slideDown(250);

		$(this).addClass('active');

		$('.drop').find('li').click(function(){
			var selectResult = $(this).html();
			$(this).parent().parent().find('input').val(selectResult);
			$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);
			dropBlock.slideUp(250);
		});

	} else {
		$(this).removeClass('active');
		dropBlock.slideUp(250);
	}

	return false;
});

$( document ).ready(function() {
    $('.face-var span').click(function(e) {
        $('.face-var span').removeClass('active');
        $(this).addClass('active');
    });
});