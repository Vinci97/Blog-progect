import React, { useEffect, useState } from 'react';
import styles from "./ArticlesByCategory.module.scss"
import Link from 'next/link';

const ArticlesByCategory = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/articoli.json');
        const data = await response.json();
        const filteredArticles = data.filter(article => article.category === category);
        setArticles(filteredArticles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className={styles.articles}>
      {articles.map(article => (
      <Link href={`/article/${article.id}`}>
        <div key={article.id} className={styles.article}>
          <img src={article.img} alt={article.titolo} />
          <h3>{article.titolo}</h3>
          <p>{article.contenuto.split(" ").slice(0, 10).join(" ")}...</p>
        </div>
      <a className={styles.readMore}>Read more</a>
      </Link>
      ))}
    </div>
  );
};

export default ArticlesByCategory;
