import styles from '../styles/homepage.module.css'
import car from '../assets/Images/car.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Homepage () {
    return(    
        <div className={styles.homepage}>
    <Navbar />        
        <div className={styles.homepage_container}>
<div className={styles.text}>
    <h2>The best deals for your dream car</h2>
    <p>Trinity Autos offers top quality deals on
Vehicle Purchase, Maintenance and Hire. </p>
<button className={styles.home_button}>See All Vechiles</button>
</div>

<img src={car} alt=" a car" className={styles.main_car} />
        </div>
    <Footer />    
        </div>
    )
}