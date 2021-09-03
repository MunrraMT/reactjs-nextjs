/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from 'react';

// Compound Components with ContextAPI

const TurnOnOffContext = createContext();

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);

  const onTurn = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <TurnOnOffContext.Provider value={{ isOn, onTurn }}>
      {children}
    </TurnOnOffContext.Provider>
  );
};

const TurnedOn = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);

  return isOn && children;
};

const TurnedOff = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);

  return !isOn && children;
};

const TurnButton = () => {
  const { isOn, onTurn } = useContext(TurnOnOffContext);

  return (
    <button onClick={onTurn} type="button">
      {isOn ? 'Desligar' : 'Ligar'}
    </button>
  );
};

const ReactChildrenCloneElement = () => (
  <TurnOnOff>
    <div>
      <TurnedOn>Ligado</TurnedOn>
      <TurnedOff>Desligado</TurnedOff>
      <p>Será que faz quebrar?</p>
      <TurnButton />
    </div>
  </TurnOnOff>
);

export default ReactChildrenCloneElement;
