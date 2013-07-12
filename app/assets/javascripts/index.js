// Smint

$(document).ready( function() {
    $('.subMenu').smint({
    	'scrollSpeed' : 1200
    });
});

// Back to Top

$(function() {
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 400, // Animation in speed (ms)
    animationOutSpeed: 400, // Animation out speed (ms)
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
});

$(document).ready(function() {
    $("#video").allofthelights();
});

$(document).ready(function() {
       $('.tooltip').tooltipster();
   });

$(function() {
	$('.content').wordsmith();
});

var _gaq = _gaq || [];
 _gaq.push(['_setAccount', 'UA-42421838-1']);
 _gaq.push(['_trackPageview']);

 (function() {
   var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
   ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
 })();

