import styles from '../styles/searchbutton.module.css';

export default function SearchButton () {
    return (
        <div className={styles.search_section}>
          <div className={styles.search_container}>
            <input 
              type="text" 
              placeholder="Search for cars"
              className={styles.search_input}
            />
            <button className={styles.search_button}>Search</button>
          </div>
        </div> 
    )
}