import '../assets/Icons/icons';
import styles from '../styles/login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
library.add(fas, fab);
// form validation, axios, try and catch, useEffect, useState, react query
export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    return(
        <div className={styles.login}>
  
        <div className={styles.login_container}>
            <h5>Log In</h5>
            <p>Log into your Account</p>
            <form action="GET" className={styles.form_create}>
                <label>Email:</label>
                <input type="email" name='email' placeholder='johndoe@gmail.com' />
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
    )
}