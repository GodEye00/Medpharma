import $ from "jquery"
import "jquery"

import signout from "../../Api-create-update-delete/logout"

import "../../Buttons/loginForms.css"
import "../../Buttons/sign-up-button.css"  
import "./logout_button.css"


function logout() {


    $('#logout').on('submit', function(e) {

        e.preventDefault()
        
        signout()

    })

    return (

        <div>

        <button id="logout" 
        className="loginLogoutCreateUpdateDeleteFormSubmit"
        type ="submit">
            Logout</button>

            </div>
    )
}

export default logout