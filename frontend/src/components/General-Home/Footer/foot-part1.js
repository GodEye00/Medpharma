import "./footer-part1.css"


import img1 from "./img/img-1.png"
import img2 from "./img/img-2.jpeg"
import img3 from "./img/img-3.png"
import img4 from "../NavBar/header/img/logo.png"



function footerOne() {

    return (
        <>
        <div id="footerOne"> 
            <a href="/"><img src={img4} alt="" className="logo"/></a>
        

        <div className="contacts">
            <div className="cont"><img src={img3} alt="" className="contact-image" /><span>
            23 Gamel Abdul Nasser Ave, Accra</span> </div>
            <div className="cont"><img src={img2} alt="" className="contact-image" /><span>
            030 290 9793 | 020 245 0446</span> </div>
            <a href="/"><div className="cont"><img src={img1} alt="" className="contact-image" /><span>
            customer@medpharma.care</span></div></a>
        </div>

        </div>

        </>
    )

}

export default footerOne