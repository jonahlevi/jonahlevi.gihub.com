/*-----------------------------------------------------------------------------------

 	Custom JS - All front-end jQuery
 
-----------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------*/
/*		0. Loading Div
/*-----------------------------------------------------------------------------------*/
$(window).load(function()
	{
	var l = $(".overlay"),
	    s = {display:"none",background:"none",width:"0",height:"0"};
	
	l.fadeOut("1000",function(){
		l.css(s);
		}
	);
}
);