import UpdateButton from "../Buttons/update-button"
import Delete from "../Buttons/Delete"

import "./create-update-delete.css"



function createUpdateDelete() {


    return (

        <>
        
        <div className="update"> <UpdateButton />

        </div>

            <div className="delete"> <Delete />
            
            </div>

            </>

    )
}

export default createUpdateDelete