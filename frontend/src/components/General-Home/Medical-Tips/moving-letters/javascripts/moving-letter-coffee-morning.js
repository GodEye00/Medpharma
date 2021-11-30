import anime from "animejs"

import RandomString from "../../medical-advices/medical-advices"

import "../stylesheets/moving-letter-coffee-morning.css"

function movingLettersCoffeeMorning() {

 

    window.addEventListener('load', () => { 

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');

if(textWrapper !== null) {
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

    });

    return (
        <>

<h1 class="ml9">
  <span class="text-wrapper">
    <span class="letters"> <RandomString /> </span>
  </span>
</h1>

         </>
    )
}

export default movingLettersCoffeeMorning