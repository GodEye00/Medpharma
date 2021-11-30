
import logo from './img/logo.png'



import "./header-link.css"


function header() {

    return (
        <header>
        <h1>MedPharma</h1>
        <img src={logo} className="header-image"
                 alt="Medpharma hospital logo" />
              
    </header>
    )

}

export default header