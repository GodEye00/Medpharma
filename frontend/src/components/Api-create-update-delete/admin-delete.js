

import $ from "jquery"

import swal from "../../Javascripts/Swal"


import "./admin-delete-user-account.css"


function Delete() {

    var account = JSON.parse(sessionStorage.getItem("account"))


    window.addEventListener('load', () => {  


        $('#del').on( 'submit', function(e) {
        
            e.preventDefault()
        
        
        
        
            $.ajax ( {
            type: "DELETE",
            url: "http://localhost:4000/accounts/:" + account.id,
            data: account,
            
            dataType: " json ",
           
             async: false,
            timeout: 200,
            xhrFields: {
                withCredentials: true
            },
            beforeSend: function(xhr) { 
        
                swal('question', 'Irreversible action!', 'Are you sure you want to delete your account?')
        
            },
        
            complete: function() {
          
            },
            
        
            success : function(data) {
        
                swal('success', 'Account Deleted!', data)
        
                window.open("http://localhost:3000/admin", "_self") 
        
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

}


export default Delete