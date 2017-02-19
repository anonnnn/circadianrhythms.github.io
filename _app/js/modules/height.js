module.exports = function () {
  $(document).ready(function() {
    $('.h-100-js-ns').each(function() {
      var winHeight = $(window).height();
      $(this).css('height', winHeight + 'px');
    });
  });
}
