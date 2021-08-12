/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useContext } from 'react';
import { GlobalContext } from '../providers/GlobalContext';

const P = () => {
  const {
    state: { body, counter },
    state,
    setState,
  } = useContext(GlobalContext);

  return (
    <p
      onClick={() => {
        setState((prev) => ({ ...prev, counter: prev.counter + 1 }));
      }}
    >
      {body}
    </p>
  );
};

export default P;
