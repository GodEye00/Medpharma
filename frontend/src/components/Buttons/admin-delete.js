import $ from "jquery"

import swal from "../../Javascripts/Swal"

import "./admin-update-delete.css"






function _delete(id) {


$('#sign-up-forms').on( 'click', function() {
    

    $.ajax ( {
    type: "delete",
    url: id,
    timeout: 2000,
    beforeSend: function() {

        swal('info', 'Confirm', 'Are you sure you want to delete your account?')
        

        
    },
    
    complete: function() {

    },

    success : function(data) {
    
    swal('success', 'Deleted', 'Your Account has been deleted')

    window.location.href = "/General-Home"
      

    },
    
    fail: function() { 

            swal('error', 'Sorry', 'Something went wrong')
        
    }

    }) 

    } ) 


return (
    <button id="delete" 
    className="del"
            >Delete Your Account</button>
)

}






export default _delete