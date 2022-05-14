function jqueryinit() {
  
  /*
      $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
      });
  */
      $('.open-popup-link, .popup').magnificPopup({
        items: {
            src: '#popup',
            type: 'inline'
        }
      });
  

      $('.popup').on('click',function(){
        console.log('fired');
      })

}

function scrollTop1(){
    // $('html, body').animate({
    //   scrollTop: 0
    // }, 1500, 'easeInOutExpo');

    $('.open-popup-link').magnificPopup({
      items: {
          src: '#popup',
          type: 'inline'
      }
    });
}


