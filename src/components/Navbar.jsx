import { NavLink } from 'react-router-dom';

import styles from '../styles/navbar.module.css'
import logo from '../assets/Images/logo.png';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
        <nav className={styles.navbar_container}>
  <div className={styles.left_group}>
    <NavLink to="/"><img  src={logo} alt="A logo" className={styles.logo} /></NavLink>
    <NavLink><a href="#" className={styles.black}>All Vechiles</a></NavLink>
    <NavLink><a href='#' className={styles.black}>Contact</a></NavLink>
    <NavLink to="/blog"><a  className={styles.black}>Blog</a></NavLink>
  </div>
  <div className={styles.right_group}>
    <NavLink to="/search" ><a className={styles.blue}>Cart</a></NavLink>
    <NavLink to="/createaccount"><a  className={styles.blue}>Register</a></NavLink>
    <NavLink to="/login"><button className={styles.nav_button}>Login In</button></NavLink>
  </div>
</nav>

        </div>
    )
}