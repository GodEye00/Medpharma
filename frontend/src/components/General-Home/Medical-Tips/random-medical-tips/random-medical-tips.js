import first_function from "../moving-letters/javascripts/moving-leeters-morning"
import second_function from "../moving-letters/javascripts/moving-letter-beautify"
import third_function from "../moving-letters/javascripts/moving-letter-coffee-morning"
import fourth_function from "../moving-letters/javascripts/moving-letter-great"
import fifth_function from "../moving-letters/javascripts/moving-letter-reality"
import six_function from "../moving-letters/javascripts/moving-letters-domino-dreams"
//import eighth_function from "../moving-letters/javascripts/moving-letters-hello"
import nineth_function from "../moving-letters/javascripts/moving-letters-line-Thursday"
import tenfth_function from "../moving-letters/javascripts/moving-letters-made-with-love"
import eleventh_function from "../moving-letters/javascripts/moving-letters-new"
import twelveth_function from "../moving-letters/javascripts/moving-letters-rising-strong"

import "./random-medical-tips.css"


function randomMedicalTips() {


    let array_of_functions = [
        first_function, second_function, third_function, fourth_function, 
        fifth_function, six_function, nineth_function,
        tenfth_function, eleventh_function, twelveth_function

    ]

 


      return array_of_functions[Math.floor(Math.random()*array_of_functions.length)]()



}

export default randomMedicalTips

