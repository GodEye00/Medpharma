import $ from "jquery"

import swal from "../../Javascripts/Swal"

import "./delete.css"






function _delete() {

    var account = JSON.parse(sessionStorage.getItem("account"))



    window.addEventListener('load', () => {  
 

$('#delete').on( 'click', function(e) {

    e.preventDefault()


    $.ajax ( {
    type: "DELETE",
    url: "http://localhost:4000/accounts/:" + account.id,
    data: {
        id : account.id
    },
    
    dataType: " json ",
   
     async: false,
    timeout: 5000,
    xhrFields: {
        withCredentials: true
    },
    beforeSend: function(xhr) { 

        swal('warning', 'Irreversible action!', 'Are you sure you want to delete your account?')

    },

    complete: function() {
  
    },
    

    success : function(data) {

        swal('success', 'Account Deleted!', data)

        window.open("http://localhost:3000/home", "_self") 

        },

    
    fail: function() { 

            swal('error', 'Sorry', 'Something went wrong. Retry')


           
        
    },

    error: function(data) {

        swal('error', 'Error', 'Something went wrong. Retry' + JSON.stringify(data))
    }



    }) 

    e.preventDefault()

})




  })


return (
    <button id="delete" 
    className="loginLogoutCreateUpdateDeleteFormSubmit"
            >Delete  Account</button>
)

}






export default _delete