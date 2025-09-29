import styles from '../styles/footer.module.css'
import logo from '../assets/Images/logo.png';

export default function Footer () {
    return (
        <div className={styles.footer}>
            <div className={styles.group}>
                <img src={logo} alt="A Logo" className={styles.logo}/>
            </div>
            <div className={styles.group}>
                <h4>Home</h4>
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Contact Us</a>
            </div>
            <div className={styles.group}>
                <h4>Product</h4>
                <a href="">All Vechiles</a>
                <a href="">Search</a>
                <a href="">Popular Purchases</a>
            </div>
            <div className={styles.group}>
                <h4>Social</h4>
                <a href="">Sales Rep live Chat</a>
                <a href="">Blog</a>
            </div>
        </div>
    )
}