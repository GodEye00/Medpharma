import $ from "jquery"


import swal from "../../../../Javascripts/Swal"

export default function submitUser(account) {

    window.addEventListener('load', () => { 
  
  
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
      type: "PUT",
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
  
      },
  
      complete: function() {
    
      },
      
  
      success : function(data) {
  
        swal('info', 'Consultation Submitted', 'Thnak you for your submition')
        
          },
  
      
      fail: function() { 
  
              swal('error', 'Failed', 'Something failed to submit. Please retry')
  
  
             
          
      },
  
      error: function() {
  
          swal('error', 'Error', 'Something went wrong. Retry')
      }
  
  
  
      }) 
  
  

    })

}

