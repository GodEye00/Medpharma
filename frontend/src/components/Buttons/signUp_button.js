import  "jquery"
import "bootstrap"

import PatDocNurseSignUp from "../Buttons/pat-nur-doc-signUp-button"

import "bootstrap/dist/css/bootstrap.min.css"

import "./sign-up-button.css"


function signUpButton() {

   
    return (
        <div>
 

<div className="container">

  <div className="sign-box">
 
 <button type="button" className="btn btn-info btn-lg signUpLogout-button
            loginLogoutCreateUpdateDeleteFormSubmit" data-toggle="modal" data-target="#myModal">Sign Up</button> </div>

 
 <div className="modal fade" id="myModal" role="dialog">
   <div className="modal-dialog">
   
    
     <div className="modal-content">
       <div className="modal-header">
         <button type="button" className="close" data-dismiss="modal">&times;</button>
         <h4 className="modal-title">MedPharma</h4>
       </div>
       <div className="modal-body">
         <PatDocNurseSignUp />
       </div>
       <div className="modal-footer">
         <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
       </div>
     </div>
     
   </div>
 </div>
 
</div>

        </div>
    )
}

export default signUpButton