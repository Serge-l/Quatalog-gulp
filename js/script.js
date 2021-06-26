$(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 1000,
          responsive: [
                {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
      }
    },
                {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },


  ]
        
    });
});


//burger 

const sandwich = document.getElementById('hamburger');

document.addEventListener('click',function opener (e) {
     
if (e.target === sandwich) {

    document.getElementById('popup').classList.toggle('active');
            sandwich.classList.toggle('cross');     
            sandwich.classList.toggle('burger');
}

 else if (e.target.classList.contains('pnavlist__item')) {
    e.stopPropagation();
} else {
    document.getElementById('popup').classList.remove('active');
    sandwich.classList.remove('cross');

    
 
}
});



// const sandwish = document.getElementById('hamburger');

// document.addEventListener('click',function opener (e) {
// if (e.target === sandwish) {
//     document.getElementById('popup').classList.toggle('active');
// } else if (e.target.classList.contains('pnavlist__item')) {
//     e.stopPropagation();
// } else {
//     document.getElementById('popup').classList.remove('active')
// }
// });












