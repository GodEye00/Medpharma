import React from 'react'
import 'react-dom'

import UserDetails from "./User-details"
import NavBar from "../NavBar-User-Admin/User-Admin-navbar"
import Footer from "../General-Home/Footer/final-footer"

import "./call-user.css"


class CallUser extends React.Component {

    shouldComponentUpdate() {
   return
 }

 render() {

    return (

    

        <div  className="us-body" >

            <NavBar />

            <div className = "user-details">
                <UserDetails /> </div> 

                <Footer />      

        </div>


    )


  }

}



export default CallUser
























