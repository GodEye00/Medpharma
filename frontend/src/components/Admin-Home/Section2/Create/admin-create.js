import $ from "jquery"
import createAccount from "../../../Form/Admin-create-account-sign-up-form"

import "../../Accordion/Javascript/admin-accordion"

function create() {

    window.addEventListener('load', () => {

$('#create').on('click', function() {

    $('#Create-User-Account').html(

    createAccount()

    )
})

   })

    return (
        <button id="create"
         className="loginLogoutCreateUpdateDeleteFormSubmit"
        
        >CREATE USER</button>
    )
}

export default create