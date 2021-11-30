import updateElementText from "../../Javascripts/update-elelment-text"

import "./user-update-button.css"

import $ from "jquery"

function update(tag, id) {

    $(tag).on('click', updateElementText(tag, id))

    



    return (
        <button id="update" 
        className="loginLogoutCreateUpdateDeleteFormSubmit">
            Update Symptoms</button>
    )
}

export default update

