import { useContext } from 'react';
import { GlobalContext } from '../providers/GlobalContext';

const H2 = () => {
  const {
    state: { counter },
  } = useContext(GlobalContext);

  return <h2 className='App'>{counter}</h2>;
};

export default H2;
