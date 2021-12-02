import UpdateDetails from "../Form/update-signUp-forms"

import "./admin-update-delete.css"

function UpdateSignUpForms() {



return ( 
    <div> 


        <div className="container">
 
 <button type="button" className="btn btn-info btn-lg update-button admin-update"
  data-toggle="modal" data-target="#myModal">Update Your Details</button>

 
 <div className="modal fade" id="myModal" role="dialog">
   <div className="modal-dialog">
   
    
     <div className="modal-content">
       <div className="modal-header">
         <button type="button" className="close" data-dismiss="modal">&times;</button>
         <h4 className="modal-title">MedPharma</h4>
       </div>
       <div className="modal-body">
         <UpdateDetails />
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






export default UpdateSignUpForms