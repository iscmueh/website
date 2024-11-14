(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  // Sticky Menu
  $(window).scroll(function () {
    var height = $('.top-header').innerHeight();
    if ($('header').offset().top > 10) {
      $('.top-header').addClass('hide');
      // $('.navigation').addClass('nav-bg');
      $('.navigation').css('margin-top','-'+height+'px');
    } else {
      $('.top-header').removeClass('hide');
      // $('.navigation').removeClass('nav-bg');
      $('.navigation').css('margin-top','-'+0+'px');
    }
  });

  

  // Background-images
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });

  //Hero Slider
  // $('.hero-slider').slick({
  //   autoplay: true,
  //   autoplaySpeed: 7500,
  //   pauseOnFocus: false,
  //   pauseOnHover: false,
  //   infinite: true,
  //   arrows: true,
  //   fade: true,
  //   prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-angle-left\'></i></button>',
  //   nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-angle-right\'></i></button>',
  //   dots: true
  // });
  // $('.hero-slider').slickAnimation();

  // // venobox popup
  // $(document).ready(function () {
  //   $('.venobox').venobox();
  // });

  // filter
  // $(document).ready(function () {
  //   var containerEl = document.querySelector('.filtr-container');
  //   var filterizd;
  //   if (containerEl) {
  //     filterizd = $('.filtr-container').filterizr({});
  //   }
  //   //Active changer
  //   $('.filter-controls li').on('click', function () {
  //     $('.filter-controls li').removeClass('active');
  //     $(this).addClass('active');
  //   });
  // });

  //  Count Up
  function counter() {
    var oTop;
    if ($('.count').length !== 0) {
      oTop = $('.count').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.count').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  $(window).on('scroll', function () {
    counter();
  });

  // Animation
  $(document).ready(function () {
    $('.has-animation').each(function (index) {
      $(this).delay($(this).data('delay')).queue(function () {
        $(this).addClass('animate-in');
      });
    });
  });

  
// TweenLite.set(".pageBg", {xPercent: -50, yPercent: -50});
// TweenLite.set(".pageWrapper", {left: "50%", perspective: 1000 });
// TweenLite.set(".page", {transformStyle: "preserve-3d"});
// TweenLite.set(".back", {rotationY: -180});
// TweenLite.set([".back", ".front"], {backfaceVisibility: "hidden"});


// $(".page").click(
// 	function() {
// 		if (pageLocation[this.id] === undefined || pageLocation[this.id] == "right") {
// 			zi = ($(".left").length) + 1;
// 			TweenMax.to($(this), 1, {force3D: true, rotationY: -180, transformOrigin: "-1px top", className: '+=left', z: zi, zIndex: zi});
// 			TweenLite.set($(this), {className: '-=right'});
// 			pageLocation[this.id] = "left";
// 		} else {
// 			zi = ($(".right").length) + 1;
// 			TweenMax.to($(this), 1, {force3D: true, rotationY: 0, transformOrigin: "left top", className: '+=right', z: zi, zIndex: zi
// 			});
// 			TweenLite.set($(this), {className: '-=left'});
// 			pageLocation[this.id] = "right";
// 		}
// 	}
// );


// // FlipBook
// $(".front").hover(
// 	function() {
// 		TweenLite.to($(this).find(".pageFoldRight"), 0.3, {width: "50px", height: "50px", backgroundImage: "linear-gradient(45deg,  #fefefe 0%,#f2f2f2 49%,#ffffff 50%,#ffffff 100%)"});
// 	},
// 	function() {
// 		TweenLite.to($(this).find(".pageFoldRight"), 0.3, {width: "0px", height: "0px"});
// 	}
// );

// $(".back").hover(
// 	function() {
// 		TweenLite.to($(this).find(".pageFoldLeft"), 0.3, {width: "50px", height: "50px", backgroundImage: "linear-gradient(135deg,  #ffffff 0%,#ffffff 50%,#f2f2f2 51%,#fefefe 100%)"		});
// 	},
// 	function() {
// 		TweenLite.to($(this).find(".pageFoldLeft"), 0.3, {width: "0px", height: "0px"});
// 	}
// )

// var pageLocation = [],
// 	lastPage = null;
// 	zi = 0;



  
})(jQuery);