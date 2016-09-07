/*-----------------------------------------------------------------------------------

 	Custom JS - All front-end jQuery
 
-----------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------*/
/*		0. Loading Div
/*-----------------------------------------------------------------------------------*/
$(window).load( function()
	{
	var l = $(".overlay"),
	    s = {display:"none",background:"none",width:"0",height:"0"};
	
	l.fadeOut("1000",function(){
		l.css(s);
		}
	);
}
);

$( document ).ready(function() {
/*-----------------------------------------------------------------------------------*/
/*		1. Scroll to CTA
/*-----------------------------------------------------------------------------------*/
$("a.to-cta").click( function() {
    $('html, body').animate({
        scrollTop: $("#cta").offset().top
    }, 1500);
});

/*-----------------------------------------------------------------------------------*/
/*		2. Hellobar
/*-----------------------------------------------------------------------------------*/
		
		if (Cookies.get('hellobar') == undefined) {
			Cookies.set('hellobar', 'fresh');
		};
		

		if (Cookies.get('hellobar') === 'fresh') {

			setTimeout(function() {
    		$('#hellobar').animate({marginTop: 0}, 300);
		}, 1500);

		};

		

		$('#hellobar .close').click( function() {
			
			Cookies.set('hellobar', 'no', { expires: 2 });

			$('#hellobar').animate({marginTop: -52}, 200);

		});

		$('#hellobar a').click( function() {
			
			Cookies.set('hellobar', 'yes', { expires: 30 });

			$('#hellobar').animate({marginTop: -52}, 200);

		});

});