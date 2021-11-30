import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'

import Switch from "./Switch"
import Header from "../components/General-Home/NavBar/header/header-link"

function routSwitch() {

    return (
        <Router>
                    
                       <Header /> 
                        <Switch />
                   

        </Router>
    )
}

export default routSwitch()





