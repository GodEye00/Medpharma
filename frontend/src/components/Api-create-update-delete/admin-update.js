import updateElementText from "../../Javascripts/ajax-put-new-text"

import $ from "jquery"

function update(tag, id) {

    $(tag).on('click', updateElementText(tag, id))

    



    return (
        <button id="create" 
        className="loginLogoutCreateUpdateDeleteFormSubmit 
        update-consultation">
            UPDATE CONSULTATION</button>
    )
}

export default update

