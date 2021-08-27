/* eslint-disable no-unused-vars */

import { useCallback, useEffect, useState } from 'react';

import '../templates/App/styles.css';

const useAsync = (asyncFunction, shouldRun) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle',
  });

  const run = useCallback(() => {
    console.log('EFFECT', new Date().toLocaleString());

    setState({
      result: null,
      error: null,
      status: 'pending',
    });

    return asyncFunction()
      .then((response) => {
        setState({
          result: response,
          error: null,
          status: 'settled',
        });
      })
      .catch((e) => {
        setState({
          result: null,
          error: e,
          status: 'error',
        });
      });
  }, []);

  useEffect(() => {
    if (shouldRun) run();
  }, []);

  return [run, state.result, state.error, state.status];
};

const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await data.json();

  return json;
};

const Home2 = () => {
  const [posts, setPosts] = useState(null);
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  if (status === 'idle') return <h1>Parado...</h1>;
  if (status === 'pending') return <h1>Loading...</h1>;
  if (status === 'error') return <h1>Error...</h1>;
  if (status === 'settled' && result.length > 0) {
    return <pre>{JSON.stringify(result, null, 2)}</pre>;
  }
  return <h1>error</h1>;
};

export default Home2;
