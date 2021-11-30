import $ from "jquery"

import swal from "../../Javascripts/Swal"

function signUpFormAjax() {

    alert("Calling Admin signFormAjax")

    var accounts = JSON.parse(sessionStorage.getItem("account"))

        window.addEventListener('load', () => {  
            
                var form = $("#admin-sign-up-forms")
            
            
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
                        url: "http://localhost:4000/accounts/",
                        data: form.serialize() ,
                        
                        dataType: " json ",
                       
                         async: false,
                        timeout: 5000,
                        xhrFields: {
                            withCredentials: true
                        },
                        beforeSend: function(xhr) { 
                            xhr.setRequestHeader('Authorization', makeBaseAuth(mail, pwd));
                            alert("Before calling")
                    
                        },
                    
                        complete: function() {
                            alert("Completed")
                      
                        },
                        
                    
                        success : function(data) {
                
                            swal('success', 'Success!', "User account has been created successfully")  
                            
                            window.open("http://localhost:3000/admin")                       
                    
                            },
                    
                        
                        fail: function() { 
                    
                                swal('error', 'Failed', 'Sorry, something went wrong. Please sign up again')
                    
                    
                               
                            
                        },
                    
                        error: function() {
                    
                            swal('error', 'Error', 'Sorry, something went wrong. Please sign up again')
                        }
                    
                    
                    
                        })
       
                
                })


}


            
            
                
                
            


export default signUpFormAjax