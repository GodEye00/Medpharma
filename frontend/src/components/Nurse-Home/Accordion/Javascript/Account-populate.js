

function Accounts(accounts) {


    return (
    <div key={accounts.id}>
    <span><h5>{accounts.title}</h5></span>
    <span><h5>{accounts.firstName}</h5></span>
    <span><h5>{accounts.lastName}</h5></span>
    <p className="dateBooked">{accounts.dateBooked}</p>
    <p className="dateCreated">{accounts.created}</p>
    <p className="dateUpdated">{accounts.updated}</p>
   </div>
    )

 } 
  
     
    
    export default Accounts()