
import "bootstrap"

import $ from "jquery"

import img1 from "../img/img-1.jpeg"
import img2 from "../img/img-2.png"
import img3 from "../img/img-3.jpg"
import img4 from "../img/img-4.jpeg"



import "./Card-carousel-slide-view.css"




function cardCarouselSlideView() {

  window.addEventListener('load', () => {
    
const $num = $('.my-card').length;
const $even = $num / 2;
const $odd = ($num + 1) / 2;

if ($num % 2 === 0) {
  $('.my-card:nth-child(' + $even + ')').addClass('active');
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.my-card:nth-child(' + $odd + ')').addClass('active');
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function() {
  const $slide = $('.active').width();
  console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode === 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode === 39) { // right
    $('.active').next().trigger('click');
  }
});

  });


    return (
        <div class="card-carousel">
        
          <div class="my-card"> <img src={img1} 
          alt="Fever"
          />
            <p>Are you having heqdache, your temperature has risen 
              so high or you feel soo hot. Consult Medpharma now!
            </p>
          </div>
        
          <div class="my-card"><img src={img2} 
          alt="General Body Weakness"/>
            <p>Or you have general body weakness, joint pains
              or rheumatism. It may be a symptom of a cronic disease. 
              Speak to a doctor now!
            </p>
          </div>
        
          <div class="my-card"><img src={img3}
          alt="Cough" />
          <p>Are you having persistent coughs or Sore Throat.
             You fear it may be a symptom
            of coronovirus? Seak to us now!
          </p>
          </div>
        
          <div class="my-card"><img src={img4} 
          alt="Diarrhea"/>
          <p>Is it Diarrhea?
            it can be a symptom of a cronic stomach infection like stomach cancer. 
            Sign Up now!
          </p>
          </div>
        



        
        
        </div>
    )
    
}

export default cardCarouselSlideView

