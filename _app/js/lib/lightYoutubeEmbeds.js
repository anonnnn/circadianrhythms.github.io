module.exports = function () {
/* Adapted from
   Light YouTube Embeds by @labnol
   http://labnol.org/?p=27941 */

function lightEmbedInit() {

  var div, n,
      v = document.getElementsByClassName('light-video-embed');

  for (n = 0; n < v.length; n++) {

    v[n].onclick = function() {

      var id = this.dataset.id;
      var img_src = new URL(this.children[0].attributes[0].value);
      var hostname = img_src.hostname;

      var iframe = document.createElement('iframe');

      if (hostname == 'i.ytimg.com') {
        var embed = 'https://www.youtube.com/embed/ID?autoplay=1';
      }
      else if (hostname == 'i.vimeocdn.com') {
        var embed = '//player.vimeo.com/video/ID?autoplay=1';
      }

      iframe.setAttribute('src', embed.replace('ID', id));
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowfullscreen', '1');
      this.parentNode.replaceChild(iframe, this);
    };
  }
}

      document.addEventListener('DOMContentLoaded', function() {
        lightEmbedInit();
      });


}
