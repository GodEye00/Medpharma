import UpdateDetails from "../Form/update-signUp-forms"
import Delete from "../Buttons/Delete"

import "./create-update-delete.css"



function createUpdateDelete(id) {


    return (

        <>
        
        <div className="update"> <UpdateDetails />

        </div>

            <div className="delete"> <Delete id = {id} />
            
            </div>

            </>

    )
}

export default createUpdateDelete