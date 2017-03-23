module.exports = function () {
  $(document).ready(function(){
    var iframeElement   = document.getElementById('scToasty');
    var scPlayer         = SC.Widget(iframeElement);
    $('img').on('click', function () {
        scPlayer.pause();
    });
  });
}
