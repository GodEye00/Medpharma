import $ from "jquery"

import swal from "../../Javascripts/Swal"

import "./delete.css"






function _delete() {

    var account = JSON.parse(sessionStorage.getItem("account"))



    window.addEventListener('load', () => {  
 

     

       


$('#delete').on( 'submit', function(e) {

    e.preventDefault()



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
    type: "DELETE",
    url: "http://localhost:4000/accounts/:" + account.id,
    data: account,
    
    dataType: " json ",
   
     async: false,
    timeout: 5000,
    xhrFields: {
        withCredentials: true
    },
    beforeSend: function(xhr) { 
        xhr.setRequestHeader('Authorization', makeBaseAuth(mail, pwd));

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

    error: function() {

        swal('error', 'Error', 'Something went wrong. Retry')
    }



    }) 

    e.preventDefault()

})




  })


return (
    <button id="delete" type="submit"
    className="loginLogoutCreateUpdateDeleteFormSubmit"
            >Delete  Account</button>
)

}






export default _delete