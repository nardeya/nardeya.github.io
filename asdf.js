		
$(document).ready(function(){
		var $root = $('html, body'); 
		$(".Nardeya").on("click", function(e) {
		    $root.animate({
		        scrollTop: $(".pimg3").offset().top
		    }, 2000, 'swing');
		    return false;
		});

		$("h3[class='About']").click(function() {
		    $root.animate({
		        scrollTop: $("div[class*='About']").offset().top
		    }, 2000, 'swing');
		});

		$("h3[class='Music']").click(function() {
		    $root.animate({
		        scrollTop: $("div[class*='Music']").offset().top
		    }, 2000, 'swing');
		});

		$("h3[class='Contact']").click(function() {
		    $root.animate({
		        scrollTop: $("div[class*='Contact']").offset().top
		    }, 2000, 'swing');
		});

		$('audio').click(function() {
		  if (this.paused == false) {
		      this.pause();
		      alert('music paused');
		  } else {
		      this.play();
		      alert('music playing');
		  }
		});


		// 	$(this).next()[0].play(); //targets the audio element next to the song title
		$('.song p').click(function() {
			$('audio').each(function(){
				$(this)[0].pause();
				$(this).css({'opacity':'0'}); //refactor this later to add and removeClass
			}); //pauses all songs to ensure no two songs play at the same time

			$(this).next().css({'opacity':'1', 'transition': 'opacity 0.3s ease-in-out'});
		    if ($(this).next()[0].paused == true) {
		        $(this).next()[0].play();
		    } else {
		        $(this).next()[0].pause();
		    }
		});


		$(this).next().css({'visibility':'visible', 'opacity':'1', 'transition': 'opacity 0.7s ease-in-out'});
});
