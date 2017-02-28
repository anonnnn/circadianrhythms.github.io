module.exports = function () {
  // main image loaded ?

  $('#cr001-bg-img').on('load', function() {
    // hide/remove the loading image
    $('#cr001-bg-black').fadeOut();
  });

  var imgAddresses = [
    'assets/images/cr001/cr001-c/cr001c-0.png',
    'assets/images/cr001/cr001-c/cr001c-1.jpg',
    'assets/images/cr001/cr001-c/cr001c-2.jpg',
    'assets/images/cr001/cr001-c/cr001c-3.jpg',
    'assets/images/cr001/cr001-c/cr001c-4.jpg',
    'assets/images/cr001/cr001-c/cr001c-5.jpg',
    'assets/images/cr001/cr001-c/cr001c-6.jpg',
  ];

  function loadImage(counter) {
    //Break out if no more images
    if(counter==imgAddresses.length) { return; }

    //Grab an image obj
    var I = document.getElementById("img"+counter);

    //Monitor load or error events, moving on to next image in either case
    I.onload = I.onerror = function() { loadImage(counter+1); }

    //Change source (then wait for event)
    I.src = imgAddresses[counter];
  }

  $(document).ready(function() {

    loadImage(0);

  });

}
