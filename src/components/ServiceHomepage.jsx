
import styles from '../styles/servicehomepage.module.css';
import shield from '../assets/Images/shield.png';
import service from '../assets/Images/service.png';
import cardeal from '../assets/Images/cardeal.png';

export default function Service () {
    return (
        <div className={styles.service_homepage}>
        <div className={styles.flexbox}>
            <div>
                <div className={styles.image_box}>
                  <img src={cardeal} alt=" a car" />  
                </div>
                <h2>Vechile Dealers</h2>
                <p>Trinity Autos provides 
quality sales, maintenance 
and vehicle hire services.</p>
            </div>
            <div>
                <div className={styles.image_box}>
                  <img src={service} alt=" a phone call" />  
                </div>
                <h2>Secure online payment</h2>
                <p>Pay instantly online or book an appointment to inspect a vehicle before purchase.</p>
            </div>
            <div>
                <div className={styles.image_box}>
                  <img src={shield} alt=" a shield" />  
                </div>
                    <h2>Customer Service</h2>
                  <p>Speak with a sales rep via real time messaging for enquiries or appointments.</p>
            </div>
        </div>
        </div>
    )
}