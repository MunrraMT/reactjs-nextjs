/* eslint-disable react/prop-types */

import { Children, cloneElement, useState } from 'react';

// Compound Components

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);

  const onTurn = () => {
    setIsOn((prev) => !prev);
  };

  return Children.map(children, (child) => {
    const newChild = cloneElement(child, { isOn, onTurn });

    return newChild;
  });
};

const TurnedOn = ({ isOn, children }) => isOn && children;

const TurnedOff = ({ isOn, children }) => !isOn && children;

const TurnButton = ({ isOn, onTurn }) => (
  <button onClick={onTurn} type="button">
    {isOn ? 'Desligar' : 'Ligar'}
  </button>
);

const ReactChildrenCloneElement = () => (
  <TurnOnOff>
    <TurnedOn>Ligado</TurnedOn>
    <TurnedOff>Desligado</TurnedOff>
    <TurnButton />
  </TurnOnOff>
);

export default ReactChildrenCloneElement;
