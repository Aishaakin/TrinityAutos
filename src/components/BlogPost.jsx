import styles from '../styles/blogpost.module.css';
import smart from '../assets/Images/smartphone.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

export default function BlogPost () {
    return (
        <div className={styles.post_container}>
        <div className={styles.container}>
            <img src={ smart} alt="A phone" className={styles.image} />
            <div className={styles.text}>
             <h1>Leveraging Digital Technology in Businesses</h1>
             <p>By: Lagbaja Gbajabiamila · 16 Jul 2020</p>
             <p><span><FontAwesomeIcon className={styles.eye} icon={['fas', 'eye']}/></span> 14 Views</p>   
            </div>
        </div>
        </div>
    )
}