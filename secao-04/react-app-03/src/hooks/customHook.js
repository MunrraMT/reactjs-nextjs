/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import '../templates/App/styles.css';

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const jsonResult = await response.json();
        setResult(jsonResult);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  return [result, loading];
};

const Home = () => {
  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
  );

  if (loading) return <p>Loading...</p>;
  if (!loading && result) console.log(result);

  return (
    <main className='App'>
      <h1>Oi</h1>
    </main>
  );
};

export default Home;
