import $ from "jquery"
import React from "react"
import "react-dom"

import SignUpFiedset from "./sign-up-fieldset"
import swal from "../../Javascripts/Swal"

class adminCreateAccountSignUpForm extends React.Component {

    shouldComponentUpdate() {
   return
 }

 render() {

    var accounts = JSON.parse(sessionStorage.getItem("account"))

    var token = accounts.jwtToken


window.addEventListener('load', () => {  

            
$('#doc-create-user').on( 'submit', function(e) {

    e.preventDefault()
    
            
                var form = $("#doc-create-user")

       

            
                    $.ajax ( {
                        type: "POST",
                        url: "http://localhost:4000/accounts/",
                        data: form.serialize() ,
                        headers: {"Authorization" : "Bearer " + token},
                        
                        dataType: " json ",
                       
                         async: false,
                        timeout: 200,
                        xhrFields: {
                            withCredentials: true
                        },
                        beforeSend: function(xhr) { 

                            alert("Before calling")
                    
                        },
                    
                        complete: function() {
                            alert("Completed")
                      
                        },
                        
                    
                        success : function(data) {
                
                            swal('success', 'Success!', "User account has been created successfully")  
                            alert("success")
                                                
                            },
                    
                        
                        fail: function() { 
                    
                                swal('error', 'Failed', 'Sorry, something went wrong. Please sign up again')
                    
                    
                               
                            
                        },
                    
                        error: function(data) {
                    
                            swal('error', 'Error', JSON.stringify(data) )
                        }
                    
                    
                    
                        })

                        e.preventDefault()
                
                })



    } ) 
    


    


    return (


    <div class="sign-up-form-container">
        <form id="doc-create-user" class="sign-up" 
    action="http://localhost:4000/accounts/" method="POST">

        <SignUpFiedset />

</form> 

</div>



)

}

}

export default adminCreateAccountSignUpForm