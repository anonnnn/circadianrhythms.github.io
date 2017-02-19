module.exports = function () {

  $(document).ready( function() {
    $('body').on('click', '.modal-trigger', function(e) {
      e.preventDefault();
      var targ = $(this).data('targetmodal');
      $('#' + targ).addClass('modal-active').fadeIn();
    });

    $('body').on('click', '.modal-close', function(e) {
      e.preventDefault();
      $('.modal-active').fadeOut().removeClass('modal-active');
    });
  });

}
