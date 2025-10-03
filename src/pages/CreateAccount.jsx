import styles from '../styles/createaccount.module.css'
import '../assets/Icons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab);
import { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
    return(
        <div className={styles.createaccount}>
      
        <div className={styles.create_container}>
            <h5>Create An Account</h5>
            <p>Create An Account instantly</p>
            <form action="GET" className={styles.form_create}>
  <label>Full Name:</label>
  <input type="text" name="name" placeholder="John Doe" />

  <label>Email:</label>
  <input type="email" name="email" placeholder="johndoe@gmail.com" />

  <label>Password:</label>
  
  <div className={styles.passwordField}>
    <input type={showPassword ? 'text ' : 'password'} name="password"  placeholder='Enter your password'/>
   <FontAwesomeIcon
        icon={showPassword ? faEye : faEyeSlash}
        className={styles.eyeIcon}
        onClick={() => setShowPassword((prev) => !prev)}
      />
  </div>
  <button className={styles.create_account_button}>Create Account</button>
</form>

                 <h6>OR</h6> 
                <div className="icon_container">
                <FontAwesomeIcon className={styles.google} icon={['fab', 'google']} />   
                <FontAwesomeIcon className={styles.facebook} icon={['fab', 'facebook']} />
                </div>
           
        </div>

        </div>
    );
}