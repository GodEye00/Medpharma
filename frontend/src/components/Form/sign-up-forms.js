import $ from "jquery"

import SignUpFiedset from "./sign-up-fieldset"

import swal from "../../Javascripts/Swal"



function signUpForms() {

window.addEventListener('load', () => {  


$('#sign-up-forms').on( 'submit', function(e) {

    e.preventDefault()


    var form = $("#sign-up-forms")


        


        $.ajax ( {
            type: "POST",
            url: "http://localhost:4000/accounts/register",
            data: form.serialize() ,
            
            dataType: " json ",
           
             async: false,
            timeout: 200,
            xhrFields: {
                withCredentials: true
            },
            beforeSend: function(xhr) { 
        
            },
        
            complete: function() {
          
            },
            
        
            success : function(data) {
    
                swal('success', 'Success!', "Your Account has been created. Kindly login")  
                
                window.open("http://localhost:3000/")                       
        
                },
        
            
            fail: function() { 
        
                    swal('error', 'Failed', 'Sorry, something went wrong. Please sign up again')
        
        
                   
                
            },
        
            error: function() {
        
                swal('error', 'Error', 'Sorry, something went wrong. Please sign up again')
            }
        
        
        
            })
            
    
    
        e.preventDefault()
    
    })


    
    

})
 

    return (


    <div class="sign-up-form-container">
        <form id="sign-up-forms" class="sign-up" 
    action="http://localhost:4000/accounts/register" method="POST">

        <SignUpFiedset />

  </form> 


</div>



)

}



export default signUpForms