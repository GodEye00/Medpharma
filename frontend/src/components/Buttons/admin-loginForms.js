import $ from "jquery"
import React from 'react'

import swal from "../../Javascripts/Swal"

import "./loginForms.css"
import "./admin-loginForms.css"


function loginForm() {
    

    window.addEventListener('load', () => {  

        var ssoAction = function (data) { 

            if(data.role === "User") {

                window.open("http://localhost:3000/user", "_self") 
            }
      
         else if (data.role === "Admin") {
            window.open("http://localhost:3000/admin", "_self") 
         }

    }

        

     

       


$('#login-Form').on( 'submit', function(e) {

    e.preventDefault()

  var form = $(this)


function makeBaseAuth(user, pswd){ 
    var token = user + ':' + pswd;
    var hash = "";
    if (btoa) {
       hash = btoa(token);
    }
    return "Basic " + hash;
 }

 var mail = $('.email').val().toString()
 var pwd = $('.pwd').val().toString()
    

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
        xhr.setRequestHeader('Authorization', makeBaseAuth(mail, pwd));

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

    error: function() {

        swal('error', 'Error', 'Something went wrong. Retry')
    }



    }) 

    e.preventDefault()

})




  })

    



    return (
        <div className="loginFormContainer" id="admin-login">
            <form id ="login-Form" className="login" name="form"
                action="http://localhost:4000/accounts/authenticate" method="POST" > 
                <label for="name">Email</label>
                <input className="email" type="email" name="email" />
                <label for="pwd" className="password-label">Password</label>
                <input className="pwd" type="password"  name="password" />
                <input id="login" type="submit" value="Login" 
                className="loginLogoutCreateUpdateDeleteFormSubmit log"/>
            </form>

             </div> 

    )
}

export default loginForm