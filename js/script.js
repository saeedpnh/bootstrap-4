$(function () {

  checkHeaderStatus()
  window.scroll(function () {
    checkHeaderStatus()
  });

  function checkHeaderStatus(){
    $(window).on('activate.bs.scrollspy', function () {
      var hash = $('.site-nav').find('a.active').attr('href');
      console.log(hash)
      if (hash !== '#page-hero') {
        $('header nav').addClass('inbody');
      } else {
        $('header nav').removeClass('inbody');
      }
    });
  }


  // $(window).on('activate.bs.scrollspy', function () {
  //   var hash = $('.site-nav').find('a.active').attr('href');
  //   if (hash !== '#page-hero') {
  //     $('header nav').addClass('inbody');
  //   } else {
  //     $('header nav').removeClass('inbody');
  //   }
  // });



  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(document).on("click", "a.js-scroll-trigger", function (e) {
    var anchor = $(this);
    $("html,body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 50
        },
        1200,
        "easeOutQuad"
      );
    e.preventDefault();
  });

});