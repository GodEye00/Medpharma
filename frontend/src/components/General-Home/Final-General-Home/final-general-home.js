import NavigationBar from "../NavBar/FinalNavigationBar/final-Nav-Bar"
import FirstSection from "../FirstSection/final-first-section/final-first-section"
import SecondSection from "../SecondSection/final-second-section/final-second-section"
import MedicalTips from "../Medical-Tips/final-medical-tips/final-medical-tips"
import Footer from "../Footer/final-footer"
import SignUp from "../../Buttons/signUp_button"
import Login from "../../Buttons/loginForm"







import "./final-general-home.css"




function GeneralHome() {


    return (

        <div className="Body"> 

            <NavigationBar />  

            <div className="test">

               <Login /> 

               <SignUp />
                
                </div>

          

            
            <FirstSection /> 
    

            <SecondSection />


           <MedicalTips/>  


           <Footer />

          

        
        
        </div>

    )

}

export default GeneralHome