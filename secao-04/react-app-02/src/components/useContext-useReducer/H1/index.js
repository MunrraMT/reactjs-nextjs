import { useContext } from 'react';
import { GlobalContext } from '../providers/GlobalContext';

const H1 = () => {
  const {
    state: { title },
  } = useContext(GlobalContext);

  return <h1 className='App'>{title}</h1>;
};

export default H1;
