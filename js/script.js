// fixed menu
$(window).scroll(function(){
  if($(window).scrollTop() > 100){
    $(".menu").addClass("fixed_menu")
  }else{
    $(".menu").removeClass("fixed_menu")
  }
})

// back_2_top
$(".back_2_top").click(function(){
  $("html,body").animate({
    scrollTop:0
  },1000);
})

$(window).scroll(function(){
  if($(window).scrollTop() > 300) {
    $(".back_2_top").fadeIn()
  }else {
    $(".back_2_top").fadeOut()
  }
})

// album slider 
$('.album_slider').slick({
  arrows:false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //  counter up 
$('.counter').counterUp({
    delay: 10,
    time: 1000,
});

//  mix it up
$(document).ready(function(){
  var mixer = mixitup('.swich');
});
