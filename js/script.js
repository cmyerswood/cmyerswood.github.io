$(document).ready(function () {

// Show/hide nav bar

	$('#more').click(function(){
        $('nav').slideToggle();
    });

// Show creatures

	$('#milestone1').mouseover(function(){
        $('#creature1').slideToggle();
    });

    $('#milestone2').mouseover(function(){
        $('#creature2').slideToggle();
    });

    $('#milestone3').mouseover(function(){
        $('#creature3').slideToggle();
    });

    $('#milestone4').mouseover(function(){
        $('#creature4').slideToggle();
    });

    $('#milestone5').mouseover(function(){
        $('#creature5').slideToggle();
    });

    $('#milestone6').mouseover(function(){
        $('#creature6').slideToggle();
    });

    $('#milestone7').mouseover(function(){
        $('#creature7').slideToggle();
    });

    $('#milestone8').mouseover(function(){
        $('#creature8').slideToggle();
    });

    $('#milestone9').mouseover(function(){
        $('#creature9').slideToggle();
    });

    $('#milestone10').mouseover(function(){
        $('#creature10').slideToggle();
    });

    $('#milestone11').mouseover(function(){
        $('#creature11').slideToggle();
    });

    $('#milestone12').mouseover(function(){
        $('#creature12').slideToggle();
    });

    $('#milestone13').mouseover(function(){
        $('#creature13').slideToggle();
    });

    $('#milestone14').mouseover(function(){
        $('#creature14').slideToggle();
    });

    $('#milestone15').mouseover(function(){
        $('#creature15').slideToggle();
    });

    $('#milestone16').mouseover(function(){
        $('#creature16').slideToggle();
    });

    $('#milestone17').mouseover(function(){
        $('#creature17').slideToggle();
    });

    $(window).scroll(function(){
    	$('#creature1').slideUp();
    });

 // Hide creatures

    $(window).scroll(function(){
    	$('#creature2').slideUp();
    });

    $(window).scroll(function(){
    	$('#creature3').slideUp();
    });

    $(window).scroll(function(){
    	$('#creature4').slideUp();
    });

    $(window).scroll(function(){
    	$('#creature5').slideUp();
    });

    $(window).scroll(function(){
    	$('#creature6').slideUp();
    });

    $(window).scroll(function(){
    	$('#creature7').slideUp();
    });

    $(window).scroll(function(){
    	$('#creature8').slideUp();
    });

    $(window).scroll(function(){
    	$('#creature9').slideUp();
    });

    $(window).scroll(function(){
    	$('#creature10').slideUp();
    });

    $(window).scroll(function(){
    	$('#creature11').slideUp();
    });

    $(window).scroll(function(){
    	$('#creature12').slideUp();
    });

    $(window).scroll(function(){
    	$('#creature13').slideUp();
    });

    $(window).scroll(function(){
    	$('#creature14').slideUp();
    });

    $(window).scroll(function(){
    	$('#creature15').slideUp();
    });

    $(window).scroll(function(){
    	$('#creature16').slideUp();
    });

    $(window).scroll(function(){
    	$('#creature17').slideUp();
    });

// Back to top
  $(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.go-top').fadeIn(200);
		} else {
			$('.go-top').fadeIn(200);
			}
	});
			
			// Back to top animation
			$('.go-top').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 300);
			})


// Audio 

$(function(){
    var soundhover     = $('.sound');
        var soundaudio = soundhover.find('audio')[0];

    soundhover.hover(function(){
       soundaudio.play();
    }, function(){
       soundaudio.stop();
    });
 
});

});