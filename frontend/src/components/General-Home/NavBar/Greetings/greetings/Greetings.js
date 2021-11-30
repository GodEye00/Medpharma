import $ from "jquery"

import randomMedicalTips
 from "../../../Medical-Tips/random-medical-tips/random-medical-tips"
import greetUser from "./get-greetings"
import getRandomColor from  "./random-color-generator"


import "./greetings.css"



function greetings() {

    var i = 0

    while ( i < 1000) {


        $('#top-greetings').css('color', getRandomColor());

        i++

    }



    const get = greetUser()

   const greet = randomMedicalTips(get)

    
    return (
        <>  
        
        <div className="greetings" id="top-greetings">
            <h2>{greet}</h2>

        </div>

        </>
    )
}

export default greetings