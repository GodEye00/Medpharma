import React from 'react'
import { BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom'

import Home from "../components/General-Home/Final-General-Home/final-general-home"
import User from "../components/User-Home/call-user"
import Admin from "../components/Admin-Home/final-admin-accordion/final-admin-accordion"
import NotFound from "./page-NotFound"
import login from "../components/Buttons/loginForm"
import sign_up from "../components/Form/sign-up-forms"
import update_details from "../components/Form/update-signUp-forms"
import Header from "../components/General-Home/NavBar/header/header-link"
import Nurse from "../components/Nurse-Home/final-admin-accordion/final-admin-accordion"
import AdminAccountCreate from "../components/Form/AdminAccount"
import AdminLoginFroms from "../components/Buttons/admin-loginForms"


//import Home from "../components/General-Home/Final-General-Home/final-general-home"
//import Router from "./Router"

import "../Stylesheets/App.css"

class App extends React.Component {

  
  render() {

  return (

    <div className="App">

    <Router>
    
    <Link to="/"><Header /></Link>
    
    <Switch>
         <Route path="/home" exact component={Home} /> 
         <Route path="/user" exact component={User} /> 
         <Route path="/admin" exact component={Admin} /> 
         <Route path="/nurse" excat component ={Nurse} />
         <Route path="/login" exact component={login} /> 
         <Route path="/sign-up" exact component={sign_up} />
         <Route path="/admin-login" exact component={AdminLoginFroms} />  
         <Route path="/admin-sign-up" exact component= {AdminAccountCreate} /> 
         <Route path="/update-details" exact component={update_details} />
         <Route exact path="/">
           <Redirect to="/home" />
         </Route>
         <Route component={NotFound} />
  
    </Switch>

    </Router>

        </div>
  ) 



  }


}




export default App
