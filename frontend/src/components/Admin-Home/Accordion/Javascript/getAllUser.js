import $ from "jquery"



export default function getAllUsers(account) {

    alert("getAllUsers function has been called")

    var accounts = {}

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
      type: "GET",
      url: "http://localhost:4000/accounts/",
      data: account,
      
      dataType: " json ",
     
       async: false,
      timeout: 5000,
      xhrFields: {
          withCredentials: true
      },
      beforeSend: function(xhr) { 
          xhr.setRequestHeader('Authorization', makeBaseAuth(mail, pwd));
          alert("Before get all users")
  
      },
  
      complete: function() {
        alert("Complered get all users")
    
      },
      
  
      success : function(data) {
            account = data
        
          },
  
      
      fail: function() { 
  
  
  
             
          
      },
  
      error: function() {
  
      }
  
  
  
      }) 
  
  

    })

    return accounts

}

