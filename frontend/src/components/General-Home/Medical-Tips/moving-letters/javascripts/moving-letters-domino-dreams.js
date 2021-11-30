import anime from "animejs"

import RandomString from "../../medical-advices/medical-advices"

import "../stylesheets/moving-letters-domino-great.css"

function movingLettersDominoDreams() {



    window.addEventListener('load', () => { 
    
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .letters');
if(textWrapper !== null || undefined) {
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
} else return

try {

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  }) } catch(e) {
    console.log('undefined')
  }

});

    return (
        <>
<h1 class="ml10">
  <span class="text-wrapper">
    <span class="letters"> <RandomString /> </span>
  </span>
</h1>
         </>
    )
}

export default movingLettersDominoDreams