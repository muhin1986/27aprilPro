
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $("#mainNav").addClass("scrolling");
    } else {
        $("#mainNav").removeClass("scrolling");
    }
});
$(document).ready(function(){
    $('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 500,
});
	
});
  $(function() {
    $(".rslides").responsiveSlides();
  });
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
    $(document).ready(function(){
      $('.sliders4').slick({
          autoplay: true,
          autoplaySpeed: 1000,
      });
    });
//for scrollToTop
$(document).on('click','#scrollToTop',function(){
    $('html,body').animate({scrollTop:0},500);
    return false;
});
//scrollToTOP Button control
$(document).scroll(function(e){
    var scrollposition= $(this).scrollTop();
    if(scrollposition < 100){
        $('#scrollToTop').addClass('hide');
    }else{
        $('#scrollToTop').removeClass('hide');
    }
});
                      wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       false,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();
$('.parallax-window').parallax({imageSrc: 'img/MZ.jpg'});
