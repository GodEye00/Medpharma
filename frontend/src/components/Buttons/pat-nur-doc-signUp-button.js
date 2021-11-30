import $ from "jquery"


import PatDoc from "./patient-doctor-buttons"

import "./patient-doctor-button.css"


    export default function patNurDocSignUp() {

        window.addEventListener('load', () => {

            var $patient  =  $("#patient")
            var $doctor = $("#doctor")
            var $create_patient = $("#create-patient")
            var $create_doctor  = $("#create-doctor")
            var $nurse = $("#nurse")
      
            $patient.on('click', () => {
                $patient.fadeOut(700)
                $nurse.fadeOut(700)
                $doctor.fadeOut(700)
                $create_patient.css('display', 'block').fadeIn(700)
              

            } )

            $doctor.on('click', () => {
                $doctor.fadeOut(700)
                $patient.fadeOut(700)
                $nurse.fadeOut(700)
                $create_doctor.css('display', 'block').fadeIn(700)
               

            })

            
            $nurse.on('click', () => {
                $doctor.fadeOut(700)
                $nurse.fadeOut(700)
                $patient.fadeOut(700)
                $create_doctor.css('display', 'block').fadeIn(700)
               

            })

        })


        return (
            <>
            <button id="nurse" className="loginLogoutCreateUpdateDeleteFormSubmit">Nurse</button>
            <div id="pat-doc"><PatDoc /></div>

            </>

        )
    }