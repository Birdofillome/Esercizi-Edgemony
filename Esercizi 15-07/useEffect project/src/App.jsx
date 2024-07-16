import { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(1);
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const fetchPost = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      console.log(`Recupero dati API ${id}`);
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      setPost(data);
      localStorage.setItem(`post_${id}`, JSON.stringify(data));
      console.log(`Dati ${id} salvati in local storage`);
    } catch (error) {
      setError("Error fetching post");
      console.error("Error fetching post", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUser = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      console.log(`Recupero dati API ${id}`);
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      setUser(data);
      localStorage.setItem(`user_${id}`, JSON.stringify(data));
      console.log(`User ${id} salvato nel local storage`);
    } catch (error) {
      setError("Error fetching user");
      console.error("Error fetching user", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(`Componente renderizzato n° ${count}`);
    const storedPost = localStorage.getItem(`post_${count}`);
    const storedUser = localStorage.getItem(`user_${count}`);

    if (storedPost && storedUser) {
      console.log(`Trovato componente n° ${count} nel local storage`);
      setPost(JSON.parse(storedPost));
      setUser(JSON.parse(storedUser));
    } else {
      console.log(`Nessun dato trovato nel local storage ${count}, effettuare chiamata API`);
      fetchPost(count);
      fetchUser(count);
    }
  }, [count]);

  return (
    <div className={styles.app}>
      <h1 className={styles.counter}>ID: {count}</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {post && (
        <div className={styles.post}>
          <h2 className={styles.post_title}>{post.title}</h2>
          <p className={styles.post_body}>{post.body}</p>
        </div>
      )}
      {user && (
        <div className={styles.user}>
          <h3 className={styles.user_name}>{user.name}</h3>
          <p className={styles.user_email}>{user.email}</p>
        </div>
      )}
      <button className={styles.button} onClick={incrementCount}>
        Next Post
      </button>
    </div>
  );
}

export default App;


