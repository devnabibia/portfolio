import React, { useState, useEffect } from 'react';

interface MediumArticle {
  title: string;
  link: string;
  guid: string;
}

const Publications: React.FC = () => {
  const [articles, setArticles] = useState<MediumArticle[]>([]);

  useEffect(() => {
    const fetchMediumArticles = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@devnabibia'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch Medium articles');
        }

        const data = await response.json();
        setArticles(data.items);
      } catch (error) {
        console.error('Error fetching Medium articles:', error.message);
      }
    };

    fetchMediumArticles();
  }, []);

  return (
    <div>
      <h1>My blog</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.guid}>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;
