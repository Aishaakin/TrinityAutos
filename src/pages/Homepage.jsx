import styles from '../styles/homepage.module.css'
import car from '../assets/Images/car.png';
import '../assets/Icons/icons';
import CarHomepage from '../components/CarHomepage';
import Service from '../components/ServiceHomepage';
import background from '../assets/Images/background.jpg';
import '../assets/Icons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Homepage () {
    return(    
        <div className={styles.homepage}>
          
        <div className={styles.homepage_container}>
<div className={styles.text}>
    <h2>The best deals For your dream car</h2>
    <p>Trinity Autos offers top quality deals on
Vehicle Purchase, Maintenance and Hire. </p>
<button className={styles.home_button}>See All Vechiles</button>
</div>

<img src={car} alt=" a car" className={styles.main_car} />
        </div>
    <img src={ background } alt=""  className={styles.background}/>    
    
    <CarHomepage />
    <br />
    <br />   
    <br /> 
    <br /> 
    <br /> 
    <br /> 
    <Service />
    <br />   
    <br /> 
    <br /> 
    <br /> 
    <br /> 
    </div>        

    )
}