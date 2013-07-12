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

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-42421838-1', 'ericchesbrough.com');
  ga('send', 'pageview');


