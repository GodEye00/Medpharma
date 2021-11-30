import $ from "jquery"

import CreatePatientAccount from "../Form/sign-up-forms"
import CreateDoctorAccount from "../Form/AdminAccount"

import "./patient-doctor-button.css"


    export default function patientDoctor() {

        window.addEventListener('load', () => {

            var $patient  =  $("#patient")
            var $doctor = $("#doctor")
            var $create_patient = $("#create-patient")
            var $create_doctor  = $("#create-doctor")
      
            $patient.on('click', () => {
                $patient.fadeOut(700)
                $doctor.fadeOut(700)
                $create_patient.css('display', 'block').fadeIn(700)
              

            } )

            $doctor.on('click', () => {
                $doctor.fadeOut(700)
                $patient.fadeOut(700)
                $create_doctor.css('display', 'block').fadeIn(700)
               

            })

        })


        return (
            <>
            <button id="patient" className="loginLogoutCreateUpdateDeleteFormSubmit">Patient</button>
            <button id="doctor" className="loginLogoutCreateUpdateDeleteFormSubmit">Doctor</button>
            <div id="create-doctor"><CreateDoctorAccount/></div>
            <div id="create-patient"><CreatePatientAccount/></div>

            </>

        )
    }