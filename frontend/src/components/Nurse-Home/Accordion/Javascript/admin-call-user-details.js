import "../Stylesheets/admin-call-user-details.css"


function adminUserDetails() {

    var accounts = JSON.parse(sessionStorage.getItem("account"))

    return (
        <div id="user-box"> 
        
        <div className="user-nme"><span className="user-ttl"><h2>{accounts.title}</h2></span>
                <span className="user-fname"><h2>{accounts.firstName}</h2></span>
                <span className="user-lname"><h2>{accounts.lastName}</h2></span></div>
            <div className="dte-crtd"><h3>{accounts.created}</h3></div>
            <div className="lst-upd"><h3>{accounts.updated}</h3></div>
            <span className="yor-symp"> Patient Symptoms</span>
            <div className="symp">{accounts.symptoms}</div>
             <span className="yor-const"> Your Provided Consultation</span>
            <div className="const">{accounts.consultation}</div>
            
        
        </div>

    )

} 

export default adminUserDetails