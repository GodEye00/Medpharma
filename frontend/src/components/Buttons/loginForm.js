import $ from "jquery"
import React from 'react'

import swal from "../../Javascripts/Swal"

import "./loginForms.css"


function AdminLoginForm() {
    

    window.addEventListener('load', () => {  

        var ssoAction = function (data) { 

            if(data.role === "Admin") {

                window.open("http://localhost:3000/admin", "_self") 
            }
      
         else  {
            window.open("http://localhost:3000/user", "_self") 
         }

    }

    
        

     

       


$('#admin-login-Form').on( 'submit', function(e) {

    e.preventDefault()

  var form = $('#admin-login-Form')



    $.ajax ( {
    type: "POST",
    url: "http://localhost:4000/accounts/authenticate",
    data: form.serialize(),
    
    dataType: " json ",
   
     async: false,
    timeout: 5000,
    xhrFields: {
        withCredentials: true
    },
    beforeSend: function(xhr) { 

    },

    complete: function() {
  
    },
    

    success : function(data) {

    sessionStorage.setItem("account", JSON.stringify(data))                      

        ssoAction(data)


        },

    
    fail: function() { 

            swal('error', 'Sorry', 'Something went wrong. Retry')


           
        
    },

    error: function(data) {

        swal('error', 'Error', 'Something went wrong. Retry ' + JSON.stringify(data))
    }



    }) 

    e.preventDefault()

})




  })

    



    return (
        <div className="loginFormContainer">
            <form id ="admin-login-Form" className="login" name="form"
                action="http://localhost:5000/admin_accounts/authenticate" method="POST" > 
                <label for="name">Email</label>
                <input className="email" type="email" name="email" />
                <label for="pwd" className="password-label">Password</label>
                <input className="pwd" type="password"  name="password" />
                <input id="login" type="submit" value="Login" 
                className="loginLogoutCreateUpdateDeleteFormSubmit"/>
            </form>

             </div> 

    )
}

export default AdminLoginForm