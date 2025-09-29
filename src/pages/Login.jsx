import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/login.module.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Login() {
    return(
        <div className={styles.login}>
       <Navbar />     
        <div className={styles.login_container}>
            <h5>Log In</h5>
            <p>Log into your Account</p>
            <form action="GET" className={styles.form_create}>
                <label>Email:</label>
                <input type="email" name='email' placeholder='johndoe@gmail.com' />
                <label>Password:</label>
                <input type="password" name='password'/>
                <button className={styles.create_account_button}>Create Account</button>
                 </form>
                {/* <div className="icon_container">
                 <FontAwesomeIcon icon={byPrefixAndName.fab['google']} />   
                <FontAwesomeIcon icon={byPrefixAndName.fab['facebook']} />
                </div> */}
           
        </div>
    <Footer />    
        </div>
    )
}