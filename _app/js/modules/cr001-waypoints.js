module.exports = function() {
  $(document).ready(function() {
    var waypoint = new Waypoint({
      element: document.getElementById('cr001-a'),
      handler: function(direction) {
        if(direction === 'up') {
          $('.menu-link').removeClass('o-100').addClass('o-30');
          $('#menu-link-cr001-a').removeClass('o-30').addClass('o-100');
        }
      },
      offset: '50%'
    });

    var waypoint = new Waypoint({
      element: document.getElementById('cr001-b'),
      handler: function(direction) {
        if(direction === 'down') {
          $('.menu-link').removeClass('o-100').addClass('o-30');
          $('#menu-link-cr001-b').removeClass('o-30').addClass('o-100');
          $('.cr001-logo').addClass('logo-active');
        } else {
          $('.menu-link').removeClass('o-100').addClass('o-30');
          $('#menu-link-cr001-a').removeClass('o-30').addClass('o-100');
          $('.cr001-logo').removeClass('logo-active');
        }
      },
      offset: '50%'
    });

    var waypoint = new Waypoint({
      element: document.getElementById('cr001-c'),
      handler: function(direction) {
        if(direction === 'down') {
          $('.menu-link').removeClass('o-100').addClass('o-30');
          $('#menu-link-cr001-c').removeClass('o-30').addClass('o-100');
        } else {
          $('.menu-link').removeClass('o-100').addClass('o-30');
          $('#menu-link-cr001-b').removeClass('o-30').addClass('o-100');
        }
      },
      offset: '50%'
    });

    var waypoint = new Waypoint({
      element: document.getElementById('cr001-d'),
      handler: function(direction) {
        if(direction === 'down') {
          $('.menu-link').removeClass('o-100').addClass('o-30');
          $('#menu-link-cr001-d').removeClass('o-30').addClass('o-100');
        } else {
          $('.menu-link').removeClass('o-100').addClass('o-30');
          $('#menu-link-cr001-c').removeClass('o-30').addClass('o-100');
        }
      },
      offset: '50%'
    });

    var scrollToContent = function(id) {
      $('html, body').animate({
          scrollTop: $(id).offset().top
      }, 2000);
    }

    $('body').on('click', '.menu-link', function(e) {
      e.preventDefault();
      var id = $(this).attr('id')
      if (id === 'menu-link-cr001-a') {
        scrollToContent('#cr001-a');
      }
      if (id === 'menu-link-cr001-b') {
        scrollToContent('#cr001-b');
      }
      if (id === 'menu-link-cr001-c') {
        scrollToContent('#cr001-c');
      }
      if (id === 'menu-link-cr001-d') {
        scrollToContent('#cr001-d');
      }
    });
  });
}
