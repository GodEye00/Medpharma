import anime from "animejs"

import RandomString from "../../medical-advices/medical-advices"

import "../stylesheets/moving-letters-hello.css"


function movingLettershello() {


window.addEventListener('load', () => { 

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters'); 

if(textWrapper !== null || undefined) {
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\0x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
} else return


 try { 

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  }) }
      catch(e) {
        console.log('undefined')
      }


});

    return (
        <>

<h1 class="ml11">
  <span class="text-wrapper">
    <span class="line line1"></span>
    <span class="letters"> <RandomString /> asbduib</span>
  </span>
</h1>

         </>
    )
}

export default movingLettershello