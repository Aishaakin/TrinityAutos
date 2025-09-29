import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/blog.module.css'

export default function Blog() {
    return(
        <div className={styles.blog}>
        <Navbar />    
            <div className={styles.blog_container}>
           <h1 className={styles.h1}>Leveraging Digital Technology in Businesses</h1>
           <p className={styles.p}>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
        <br />
Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
        <br />
Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
           
           <p className={styles.p}>Lagbaja Gbajabiamila</p>
           <p className={styles.p}>16 Jul 2025</p>
           <div className={styles.flex_box}>
            <p className={styles.p}>Share: </p>
           </div>
            </div>
        <Footer />    
        </div>
    );
}