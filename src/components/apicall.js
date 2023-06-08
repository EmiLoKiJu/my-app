import { useState, useEffect } from 'react';
import './apicall.css';

const ApiNinja = () => {
  const category = 'anger';
  const [data, setData] = useState({ quote: 'LOADING', author: '' });
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            headers: {
              'X-Api-Key': 'Fw08AILtO+Qt2bR7wENuqQ==K7dKDmbDUGlMhbEh',
              'Content-Type': 'application/json',
            },
          },
        );

        if (!response.ok) {
          throw new Error('Error fetching data from the API');
        }

        const newData = await response.json();
        setData(newData[0]);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error 400.</div>;
  }

  return (
    <div>
      {data.quote}
      <br />
      <br />
      {data.author}
    </div>
  );
};

export default ApiNinja;
