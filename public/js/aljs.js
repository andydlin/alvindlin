/*------------------------------
Elements with the class "tool-tip" will have the tool-tip feature from Bootstrap
------------------------------*/
$('.tool-tip').tooltip();

/*------------------------------
Makes website height 100%
------------------------------*/
$(window).resize(function() {
	var height = $(window).height();
	$('body').css('height', height);
});

/*------------------------------
Enable Fart Scrolling
------------------------------*/
fartscroll(250);