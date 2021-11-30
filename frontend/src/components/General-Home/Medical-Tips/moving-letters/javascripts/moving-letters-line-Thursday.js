import anime from "animejs"

import RandomString from "../../medical-advices/medical-advices"

import "../stylesheets/moving-letters-line-Thursday.css"

function movingLettersLineThursday() {


    window.addEventListener('load', () => { 

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');

if (textWrapper !== null || undefined) {
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
} else return

try { 

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
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
<h1 class="ml1">
  <span class="text-wrapper">
    <span class="line line1"></span>
    <span class="letters"> <RandomString /> </span>
    <span class="line line2"></span>
  </span>
</h1>
         </>
    )
}

export default movingLettersLineThursday