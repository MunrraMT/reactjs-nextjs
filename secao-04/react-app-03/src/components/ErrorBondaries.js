/* eslint-disable */

import { Component, useEffect, useState } from 'react';

const s = {
  style: {
    fontSize: '60px',
  },
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo deu errado.</h1>;
    }
    return this.props.children;
  }
}

const ItWillThrowError = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);

    if (counter > 3) throw new Error('Que chato!');
  }, [counter]);

  return (
    <div>
      <button
        {...s}
        onClick={() => setCounter((prev) => prev + 1)}
        type="button"
      >
        Click to increase {counter}{' '}
      </button>
    </div>
  );
};

const ErrorBondaries = () => (
  <div>
    <ItWillThrowError />

    <ErrorBoundary>
      <ItWillThrowError />
    </ErrorBoundary>

    <ItWillThrowError />

    <ErrorBoundary>
      <ItWillThrowError />
    </ErrorBoundary>

    <ItWillThrowError />
  </div>
);

export default ErrorBondaries;
