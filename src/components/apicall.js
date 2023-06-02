import { useState, useEffect } from 'react';
import './apicall.css';

const ApiNinja = () => {
  const category = 'anger';
  const [data, setData] = useState({ quote: 'LOADING', author: '' });
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        headers: {
          'X-Api-Key': 'Fw08AILtO+Qt2bR7wENuqQ==K7dKDmbDUGlMhbEh',
          'Content-Type': 'application/json',
        },
      });
      const newData = await response.json();
      setData(newData[0]);
    };
    fetchData();
    return (
      setData({ quote: 'LOADING', author: '' })
    );
  }, []);
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
