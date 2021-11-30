import React from 'react'
import { Route, Switch} from 'react-router-dom'

import Home from "../components/General-Home/Final-General-Home/final-general-home"
import User from "../components/User-Home/call-user"
import Admin from "../components/Admin-Home/Accordion/Javascript/admin-accordion"
import NotFound from "./page-NotFound"
import login from "../components/Form/login-modal-form"
import sign_up from "../components/Form/sign-up-forms"
import update_details from "../components/Form/update-signUp-forms"




function _switch() {


    return (
        <Switch>
         <Route path="/home" exact component={Home} /> 
         <Route path="/user" exact component={User} /> 
         <Route path="/admin" exact component={Admin} /> 
         <Route path="/login" exact component={login} /> 
         <Route path="/sign-up" exact component={sign_up} /> 
         <Route path="/update-details" exact component={update_details} />
         <Route component={NotFound} />
    </Switch>
    )

}

export default _switch()


