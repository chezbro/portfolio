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
