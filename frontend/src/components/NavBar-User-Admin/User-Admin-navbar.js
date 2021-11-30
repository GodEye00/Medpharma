//import Header from "../General-Home/NavBar/header/header-link"
import Logout from "./logout/logout_button"
//import Greeting from "../General-Home/NavBar/Greetings/final-greetings/final-greetings"

import  "./userAdminNavBar.css"


function userAdminNavBar() {

    return (

        <>
         
        <div id="Navig"> 
          {/* <div className="header"> <Header /> </div> */}  
            {/*  <div className="Greeting">   <Greeting />   
            <span>{account.title}</span><span>{account.firstName}</span> </div> */} 
            <div classaname="Logout">  <Logout /> </div>
        </div> 
         </>

    )


}

export default userAdminNavBar