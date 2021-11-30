import anime from "animejs"

import RandomString from "../../medical-advices/medical-advices"

import "../stylesheets/moving-lettters-morning.css"


function movingLettersMorning() {

   

    window.addEventListener('load', () => { 
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');

if (textWrapper !== null || undefined) {
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
} else return

try {
anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  }) } catch(e) {
    console.log('undefined')
  }
 
})

    return (
        <>
<h1 class="ml2"> <RandomString /> </h1>
         </>
    )
}

export default movingLettersMorning