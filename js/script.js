$(window).scroll(function()
{
	var position = $(this).scrollTop();

	if( position >= $(window).scrollTop() && position >= 300)
	{
		$('#logo').removeClass('hide');
		$('header').removeClass('header-hide');
    } else {
        $('#logo').addClass('hide');
		$('header').addClass('header-hide');
    }
//})
});