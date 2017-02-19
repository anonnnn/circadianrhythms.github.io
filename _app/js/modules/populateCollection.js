module.exports = function () {
  $(document).ready(function() {

    var ids = [];
    var client = ShopifyBuy.buildClient({
      apiKey: '0ca3df7d8bc98f977650e10d5dcd1274',
      domain: 'circadianrhythms.myshopify.com',
      appId: '6'
    });

    var populate = function ( product ) {

      var item = '#item-' + product.id;
      $(item).find('.itemTitle').append( product.title );
      $(item).find( '.itemPrice' ).append( product.formattedPrice );
      $(item).find( '.itemDescription' ).append( product.description );
      imageCount = product.images.length;
      imageData = [];
      for (i=0; i < imageCount; i++) {
        var imageSrc = product.images[i].src;
        var filenameSplit = imageSrc.substring(imageSrc.lastIndexOf('/')+1).split(/\s*\-\s*/g);
        var fit = filenameSplit[1];
        if (fit === 'cover') {
          var fit = 'contain'
        }
        var image = {
          img: imageSrc,
          fit: fit
        }
        imageData.push(image);
      }
      $(item + ' .fotorama').fotorama({
          data: imageData,
          nav: false
      });

      //Create Thumbs
      for (i=0; i < imageCount; i++) {
          if (i == 0) {
            var cx = "thumbnail thumbnail-active";
          } else {
            var cx = "thumbnail";
          }
        $(item + ' .thumbnails').append(
          '<a class="'+cx+'" data-parent="'+item+'" data-id="'+i+'"></a>'
        );
      }
    }

    //Thumbnail event click
    $('body').on('click', '.thumbnail', function(e) {
      e.preventDefault();
      if (!$(this).hasClass('thumbnail-active')) {
        var item = $(this).attr('data-parent');
        var id = $(this).attr('data-id');
        var $fotoramaDiv = $(item + ' .fotorama').fotorama();
        var fotorama = $fotoramaDiv.data('fotorama');
        fotorama.show(id);
        $('.thumbnail-active').removeClass('thumbnail-active');
        $(this).addClass('thumbnail-active');
      }
    });

    //Next click
    $('body').on('click', '.btn-next', function(e) {
      if(!$(this).hasClass('btn-arrow-inactive')) {
        e.preventDefault();
        var id = $(this).attr('data-productId');
        var item = '#item-' + id;
        var $fotoramaDiv = $(item + ' .fotorama').fotorama();
        var fotorama = $fotoramaDiv.data('fotorama');
        fotorama.show('>');

        var size = fotorama.size;
        var activeFrameIndex = fotorama.activeFrame.i;
        if (size == activeFrameIndex) {
          $(this).addClass('btn-arrow-inactive');
        }
        $(item + ' .btn-prev').removeClass('btn-arrow-inactive');
      }
    });

    //Prev click
    $('body').on('click', '.btn-prev', function(e) {
      if(!$(this).hasClass('btn-arrow-inactive')) {
        e.preventDefault();
        var id = $(this).attr('data-productId');
        var item = '#item-' + id;
        var $fotoramaDiv = $(item + ' .fotorama').fotorama();
        var fotorama = $fotoramaDiv.data('fotorama');
        fotorama.show('<');

        var size = fotorama.size;
        var activeFrameIndex = fotorama.activeFrame.i;
        if (activeFrameIndex == 1) {
          $(this).addClass('btn-arrow-inactive');
        }
        $(item + ' .btn-next').removeClass('btn-arrow-inactive');
      }
    });

    $('.collectionItem').each(function(){
      var $item = $(this);
      var id = $(this).children('.buy-button').attr('id');
      ids.push(id);
    }).promise().done(function($item){
      client.fetchQueryProducts({products_ids: ids}).then(function (products) {
        for(var index in products) {
          var product = {
            id: products[index].id,
            selectedVariant: products[index].selectedVariant,
            selectedVariantImage: products[index].selectedVariantImage,
            currentOptions: products[index].options,
            title: products[index].title,
            images: products[index].images,
            price: products[index].selectedVariant.price,
            formattedPrice: products[index].selectedVariant.formattedPrice,
            available: products[index].selectedVariant.available,
            description: products[index].description
          }
          populate(product, $item);
        }
      });
    });
  });
}
