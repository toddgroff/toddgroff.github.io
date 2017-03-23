app.showInfo = function () {
  $(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
  });

  //Function to the css rule
  function checkSize() {
    console.log($('.contact-button'));
    if ($('.contact-button').css('visbility') === 'visible') {
      $('.grid-item').attr('href', 'javascript:void(0)');
    }
  }
};
