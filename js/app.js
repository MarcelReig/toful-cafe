$(document).foundation();

// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});
// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});  

// Efecto scroll 
$(function(){ 
  $('a.scroll[href^="#"]').click(function(e){ 
    var hash = $(this).attr('href'), 
        posicionNueva = $(hash).offset().top; 
    $("body,html,document").animate( 
      {scrollTop:posicionNueva}, 
      'slow', 
      function(){ 
        window.location.hash = hash; 
      } 
    ); 
    e.preventDefault(); 
  });
});


