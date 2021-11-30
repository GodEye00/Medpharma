import $ from "jquery"
import Modal from "./modal-login-signUp"
//import swal from "../../Javascripts/Swal"
//import callUser from "../User-Home/call-user"
//import finalAdmin from "../Admin-Home/Accordion/Javascript/admin-accordion"

import  "./login-modal-form.css"

function login() {

  window.addEventListener('load', () => {


    
    $(function() {
        const $signUp = $("#sign-up")

        $signUp.on('click', function() {

        
            })
        
        })


$('#submit').on( 'submit', function() {
    

    $.ajax ( {
    type: "post",
    url: "/authenticate",
    timeout: 2000,
    beforeSend: function() {
      
    },

    complete: function() {
       
    },

    success : function(data) {

   

        if (data.Role === 'Admin') {

            //finalAdmin(data)
        }

       //callUser(data)

       

        },

    
    fail: function() { 


            //swal('error', 'Sorry', 'Something went wrong. Retry')


           
        
    }

    }) 

    } ) 


  })


    return(

<div className="page">
  <div class="container">
    <div class="left">
      <div class="login">Login</div>
      <div class="eula">By logging in you agree to the 
      ridiculously long terms that you didn't bother to read</div>

      <div id="">Don't have an account?<span class="sign-up"><a href="/"
                                    id="sign-up">Create an account</a></span></div>

    </div>
    <div class="right">
      <svg viewBox="0 0 320 300">
        <defs>
          <linearGradient
                          inkscapeCollect="always"
                          id="linearGradient"
                          x1="13"
                          y1="193.49992"
                          x2="307"
                          y2="193.49992"
                          gradientUnits="userSpaceOnUse">
            <stop
                  style="stop-color:#ff00ff;"
                  offset="0"
                  id="stop876" />
            <stop
                  style="stop-color:#ff0000;"
                  offset="1"
                  id="stop878" />
          </linearGradient>
        </defs>
        <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
      </svg>
      <div class="form">
        <label for="email">Email</label>
        <input type="email" id="email"/>
        <label for="password">Password</label>
        <input type="password" id="password"/>
        <input type="submit" id="submit" value="Submit"/>
      </div>
    </div>
  </div>
</div>

    )

}

    

export default login