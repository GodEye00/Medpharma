import "../Buttons/loginForms.css"

import "./sign-up-fieldset.css"

// import $ from "jquery"


function signUpField() {

    /*    function toggle() {
        
        let $pwd = $('#pwd')

         if ($pwd.type === "password") $pwd.type = 'text' 

        else  $pwd.type = 'password';
         
    }
    
    */
  


    return(

        <div className="form-container">
        
    <fieldset>
    <legend>CREATE AN ACCOUNT</legend>

<label for="title" class="title">Title</label><br />
 <select id="title" name="title" >
     <option value="chosee your title">Please choose a title</option>
     <option value="officer1"  >Dr. </option>
     <option value="officer1"  >Phd. </option>
     <option value="officer1" selected >Mr. </option>
     <option value="officer1"  >Mrs. </option>
     <option value="officer1"  >Master </option>
     <option value="officer1"  >Mistress </option>
     <option value="officer1"  >Snr. </option>
     <option value="officer1"  >Jnr. </option>
     <option value="officer1"  >Sir </option>
     <option value="officer1" >Madam </option>
 </select>
 <br />

<label for="fname" class="sign-up-form-fname">First Name:</label><br />
<input type="text" name="firstName" class="name"  
placeholder = "eg. Nurain"
/><br />

<label for="lname" class="sign-up-form-lname">Last Name:</label><br />
<input type="text" name="lastName" class="name" 
placeholder = "eg. Dawuda"
/><br />

<label for="email" class="sign-up-form-email">Email:</label><br />
<input type="email" name="email" class="email" 
placeholder="eg. lawson@gmail.com"
/><br />

<label for="pwd" class="sign-up-form-pwd">Password:</label><br />
<input type="password" name="password" id="pwd" class="pwd"
/>  
<br />

{ /* <input type="checkbox" id="shwPwd"/>
<label for="showPwd">show</label>  */ }

<label for="pwd" class="sign-up-form-pwd">Confirm Password:</label><br />
<input type="password" name="confirmPassword" class="pwd" id="pwd" />
<br />

{ /* <input type="checkbox" id="shwPwd" onclick = "toggle()" />
<label for="showPwd">show</label>  */ }

<label for="officer" class="sign-up-form-officer">Choose Doctor</label><br />
 <select id="doctor" name="doctor" >
     <option value="chosee doctor">Please choose a doctor</option>
     <option value="officer1" selected >Dr. Bernard Same</option>
 </select>
 <br />

<label for="date" class="sign-up-form-date">Book Appointment Date</label><br />
<input type="date" name="bookDate" class="sign-up-form-date" 
/><br />

<label for="textarea" class="sign-up-form-text">Details of Symptoms:</label><br />
<textarea name="symptoms" id="bio" rows="10" cols="30"></textarea>
<br />
<br />
<br />


 <input type="submit" id="sign-up-form-submit" value="Create Account" 
    className ="loginLogoutCreateUpdateDeleteFormSubmit"
 />

</fieldset>

</div>

    )

}

export default signUpField