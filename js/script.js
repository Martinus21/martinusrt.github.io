//Scroll Animate
// event pada saat link di klik
$('.page-scroll').on('click', function(e) {

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap element yang bersangkutan
	var elemenTujuan = $(tujuan);


	// pindahkan scroll
	$(document).ready(function(){
		$('html, body').animate({
			scrollTop: elemenTujuan.offset().top - 55
		}, 1250, 'easeInOutExpo')
	});

	e.preventDefault();

});

//Transparent to Solid navbar
$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 500) { 
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });
});

//Typed Effect
$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 2) { 
              $('.typed').addClass('solid');
          } else {
              $('.typed').removeClass('solid');
          }
        });
});