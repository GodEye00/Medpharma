import anime from "animejs"

import RandomString from "../../medical-advices/medical-advices"

import "../stylesheets/moving-letters-beautify.css"

function movingLettersBeautify() {


    window.addEventListener('load', () => { 

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
if(textWrapper !== null || undefined) {
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
} else return

try {

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
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
<h1 class="ml6">
  <span class="text-wrapper">
    <span class="letters"> <RandomString /> </span>
  </span>
</h1>

         </>
    )
}

export default movingLettersBeautify