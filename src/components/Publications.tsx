import { useEffect, useState } from 'react';

const Publications: React.FC = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.medium.com/v1', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query {
                user(username: "devnabibia") {
                  publication {
                    posts {
                      id
                      title
                      brief
                      slug
                      coverImage
                    }
                  }
                }
              }
            `,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data from Medium API');
        }

        const data = await response.json();
        const user = data.data.user;
        
        if (user && user.publication && user.publication.posts) {
          setArticles(user.publication.posts);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      <h1>Your Medium Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.brief}</p>
            <img src={article.coverImage} alt="Article Cover" />
            {/* You can add more details or styling based on your needs */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;
