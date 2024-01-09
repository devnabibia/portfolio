import React, { useState, useEffect } from 'react';

interface MediumArticle {
  title: string;
  link: string;
  guid: string;
  id: string; // Assuming your Medium articles have an "id" property
}

const Publications: React.FC = () => {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediumArticles = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@devnabibia'
        );

        if (!response.ok) {
          throw new Error('Failed to retrieve Medium articles. Please check your Medium username or try again later.');
        }

        const data = await response.json();
        setArticles(data.items.map((item: MediumArticle) => ({ ...item, id: item.guid })));
      } catch (error: any) {
        console.error('Error fetching Medium articles:', error.message);
        setError(error.message || 'An unknown error occurred.');
      }
    };

    fetchMediumArticles();
  }, []);

  return (
    <div>
      <h1>Your Medium Articles</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Publications;
