import UpdateButton from "../Buttons/admin-update-button"
import Delete from "../Buttons/admin-delete"

import "./admin-update-delete.css"



function createUpdateDelete(id) {


    return (

        <div className="admin-update-delete">
        
        <div className="update"> <UpdateButton />

        </div>

            <div className="delete"> <Delete />
            
            </div>

            </div>

    )
}

export default createUpdateDelete