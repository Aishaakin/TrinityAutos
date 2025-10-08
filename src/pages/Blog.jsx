import styles from '../styles/blog.module.css';
import SearchButton from '../components/SearchButton';
import BlogPost from '../components/BlogPost';
import { useEffect, useState } from 'react';

export default function Blog() {
  const [allBlogs, setAllBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const convertedResponse = await response.json();
        setAllBlogs(convertedResponse);
      } catch (error) {
        // alert(error.message);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBlog();
  }, []);

  console.log(allBlogs);

  if (isLoading) {
    return (
      <div style={{ height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.blog}>
      <SearchButton />
      <br />
      {allBlogs && allBlogs.map((blog) => <BlogPost key={blog.id} title={blog.title} description={blog.body} />)}
      <br />
    </div>
  );
}
