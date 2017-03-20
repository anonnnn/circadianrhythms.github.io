module.exports = function () {
  $(document).ready(function(){
    console.log('ffs')
    var iframeElement   = document.getElementById('scToasty');
    console.log(iframeElement);
    var scPlayer         = SC.Widget(iframeElement);
    $('img').on('click', function () {
        scPlayer.pause();
    });
  });
}
