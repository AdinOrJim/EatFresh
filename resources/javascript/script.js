$(document).ready(function () {

  /*STICKY NAVIGATION */
  $('.js--section-features').waypoint(function (direction) {
    if (direction == 'down') {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }

  }, {
    offset: '60px'
  });

  /* SCROLLING BUTTONS */

  $('.js--scroll-to-plans').click(function () {
    $('html, body').animate({
      scrollTop: $('.js--section-plans').offset().top
    }, 2000);
  });

  $('.js--scroll-to-more').click(function () {
    $('html, body').animate({
      scrollTop: $('.js--section-features').offset().top
    }, 1000);
  });


  /* NAVIGATION SCROLL BUTTONS */

  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });



  /* ANIMATIONS ON SCROLL */


  $('.js--wp-1').waypoint(function (direction) {
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-2').waypoint(function (direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
    offset: '50%'
  });

  $('.js--wp-3').waypoint(function (direction) {
    $('.js--wp-3').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-4').waypoint(function (direction) {
    $('.js--wp-4').addClass('animated pulse');
  }, {
    offset: '30%'
  });



  /*  MOBILE NAVIGATION */

  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    nav.slideToggle(200);
    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }

  });


  /* MAPS */


  var map = new GMaps({
    div: '.map',
    lat: 46.7553338,
    lng: 23.562283,
    zoom: 16
  });

  map.addMarker({
    lat: 46.7565379,
    lng: 23.5565074,
    title: 'Jima',
    infoWindow: {
      content: '<p>FAMILIA JIM</p>'
    }
  });

  map.addMarker({
    lat: 46.7554182,
    lng: 23.5606381,
    title: 'FAMILIA JIM',
    infoWindow: {
      content: '<p>FAMILIA JIM</p>'
    }
  });


});