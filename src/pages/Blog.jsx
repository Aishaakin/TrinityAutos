
import styles from '../styles/blog.module.css'
import SearchButton from '../components/SearchButton';
import BlogPost from '../components/BlogPost';

export default function Blog() {
    return(
            <div className={styles.blog}>
            <SearchButton />   
            <br />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <br />
        </div>
    );
}