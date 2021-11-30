import $ from "jquery"
import CreateUpdateDelete from "../Api-create-update-delete/api-create-update-delete"
import swal from "../../Javascripts/Swal"


import "./User-details.css"
import "../Api-create-update-delete/user-update-button.css"



function userDetails() {

    var accounts = JSON.parse(sessionStorage.getItem("account"))

    window.addEventListener('load', () => {

        var text = $("#text")
        var text_appear = $("#type-symp")
        var symp = $("#symptoms")
        var submit = $("#sub-mit")
        var update = $("#update")

 

    update.on('click', () => {
        text.css('display', 'block')
        symp.css('display', 'none')
        text_appear.css('display', 'block')
        submit.css('display', 'block')
        update.css('display', 'none')

    })

    submit.on('submit', (e) => {


            
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
      type: "PUT",
      url: "http://localhost:4000/accounts/:" + accounts.id,
      data: accounts,
      
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
  
        swal('info', 'Symptom Submitted', 'Thnak you for your submition')
        

        text.css('display', 'none')
        symp.css('display', 'block')
        text_appear.css('display', 'none')
        update.css('display', 'block')
        submit.css('display', 'none')
  
          },
  
      
      fail: function() { 
  
              swal('error', 'Failed', 'Something failed to submit. Please retry')
  
  
             
          
      },
  
      error: function() {
  
          swal('error', 'Error', 'Something went wrong. Retry')
      }
  
  
  
      }) 
  
      e.preventDefault()
  

    })

})










    return (
        <div id="user-details"> 
        
        <div className="user-name"><span className="user-title"><h2>{accounts.title}</h2></span>
                <span className="user-firstname"><h2>{accounts.firstName}</h2></span>
                <span className="user-lastname"><h2>{accounts.lastName}</h2></span></div>
            <div className="created-updated"><div className="date-created"><h5>Updated Date:</h5><h6>{accounts.updated}</h6></div>
            <div className="last-update"><h5>Booked Date:</h5><h6>{accounts.booked}</h6></div></div>
            <span className="your-symptoms"> Your Symptoms</span>
            <span className="your-consultation"> Your Consultation</span>
            <div id="text">Enter your most current symptoms below</div>
            <textarea id="type-symp"></textarea>
            <div className="node-symp"><div id="symptoms">{accounts.symptoms}</div> </div>
            <div className="consults">{accounts.consultation}</div> 
            <button id="update" className="loginLogoutCreateUpdateDeleteFormSubmit">
                Update Symptoms</button>
            <button id="sub-mit" className="loginLogoutCreateUpdateDeleteFormSubmit" type="submit">
               Submit </button>
            <CreateUpdateDelete /> 
            
            
        
        </div>

    )

} 

export default userDetails