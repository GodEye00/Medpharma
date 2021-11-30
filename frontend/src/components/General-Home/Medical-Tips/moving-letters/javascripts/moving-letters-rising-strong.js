import anime from "animejs"

import RandomString from "../../medical-advices/medical-advices"

import "../stylesheets/moving-letters-rising-strong.css"

function movingLettersRisingStrong() {

window.addEventListener('load', () => {


    
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml13');
if(textWrapper !== null || undefined) {
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
} else return

try{

anime.timeline({loop: true})
  .add({
    targets: '.ml13 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.ml13 .letter',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  }) } catch(e) {
    console.log('undefined')
  }

})


    return (
        <>

            <h1 class="ml13"> <RandomString /> </h1>

         </>
    )
}

export default  movingLettersRisingStrong 

