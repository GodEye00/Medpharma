import Modal from "../components/Form/modal-login-signUp"
import swal from "./Swal"

import $ from "jquery"

export default function ayaxNewText(id) {

    
    $.ajax ( {
        type: "put",
        url: "/",
        timeout: 2000,
        beforeSend: function() {
            Modal(null,'startProgress', null)
        },
    
        complete: function() {
            Modal(null,'stopProgress', null)
        },
    
        success : function(data) {  

            swal('success', 'Geat', 'You have updated it')

      
    
            },
    
        
        fail: function() { 
    
                swal('error', 'Sorry', 'Something went wrong. Retry')
            
        }
    
        }) 
    


}
