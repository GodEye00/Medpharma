import anime from "animejs"

import RandomString from "../../medical-advices/medical-advices"

import "../stylesheets/moving-letters-great.css"

function movingLettersGreat() {

 

    window.addEventListener('load', () => { 

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
if(textWrapper !== null || undefined) {
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
} else return

try {

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  }); 
}  catch (e) {
    console.log('undefined')
}

}); 


    return (
        <>

<h1 class="ml3"> <RandomString /> </h1>

         </>
    )
}

export default movingLettersGreat