import $ from "jquery"
import swal from "../../Javascripts/Swal"


function logout() {

    var account = JSON.parse(sessionStorage.getItem("account"))

    var token = account.jwtToken     


    window.addEventListener('load', () => {


        
            $.ajax ({
            type: "POST",
            url: "http://localhost:4000/accounts/revoke-token",
            headers: {"Authorization" : "Bearer " + token},
            
            dataType: "json ",
           
             async: false,
            timeout: 200,
            xhrFields: {
                withCredentials: true
            },
            beforeSend: function(xhr) { 
                swal('question', 'Logout', 'Are you sure you want to logout?')
        
            },
        
            complete: function() {
          
            },
            
        
            success : function(data) {
        
                window.open("http://localhost:3000/home", "_self") 
              
                },
        
            
            fail: function() { 
        
                    swal('error', 'Error', 'Something went wrong. Please retry')
        
        
                   
                
            },
        
            error: function() {
        
                swal('error', 'Error', 'Something went wrong. Retry')
            }
        
        
        
            }) 
                
      
          })
}

    

 export default logout
