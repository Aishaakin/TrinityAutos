import { NavLink } from 'react-router-dom';

import styles from '../styles/navbar.module.css'
import logo from '../assets/Images/logo.png';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
        <nav className={styles.navbar_container}>
  <div className={styles.left_group}>
    <NavLink to="/"><img  src={logo} alt="A logo" className={styles.logo} /></NavLink>
    <NavLink className={styles.black}>All Vechiles</NavLink>
    <NavLink className={styles.black}>Contact</NavLink>
    <NavLink to="/blog" className={styles.black}>Blog</NavLink>
  </div>
  <div className={styles.right_group}>
    <NavLink to="/cart" className={styles.blue}>Cart</NavLink>
    <NavLink to="/create" className={styles.blue}>Register</NavLink>
    <NavLink to="/login"><button className={styles.nav_button}>Log In</button></NavLink>
  </div>
</nav>

        </div>
    )
}