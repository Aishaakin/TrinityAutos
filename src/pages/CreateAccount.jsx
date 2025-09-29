import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import styles from '../styles/createaccount.module.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function CreateAccount() {
    return(
        <div className={styles.createaccount}>
         <Navbar />   
        <div className={styles.create_container}>
            <h5>Create An Account</h5>
            <p>Create An Account instantly</p>
            <form action="GET" className={styles.form_create}>
                <label>Full Name:</label>
                <input type="text" name='name' placeholder='John Doe' />
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