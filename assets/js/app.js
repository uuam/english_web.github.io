particlesJS.load('particles-js', 'assets/js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  $('a[href^="#"]').click(function () {
    var target = $(this.hash);
    $("html,body").animate({
        scrollTop: target.offset().top
    }, 500);
});
