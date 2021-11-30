import anime from "animejs"

import RandomString from "../../medical-advices/medical-advices"

import "../stylesheets/moving-letter-made-with_love.css"

function movingLettersMadeWithLove() {


    window.addEventListener('load', () => { 

    // Wrap every letter in a span
var textWrapper = document.querySelector('.ml16');
if(textWrapper !== null || undefined) {
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
} else return

try {

anime.timeline({loop: true})
  .add({
    targets: '.ml16 .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.ml16',
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

            <h1 class="ml16"> <RandomString /> </h1>

         </>
    )
}

export default movingLettersMadeWithLove