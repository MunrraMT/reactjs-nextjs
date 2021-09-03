import { lazy, Suspense, useState } from 'react';

const loadComponent = () => {
  console.log('Carregando componente');

  return import('./lazy-component');
};

const LazyComponent = lazy(loadComponent);

const NewHome = () => {
  const [show, setShow] = useState(false);

  return (
    <section>
      <button
        type="button"
        onMouseOver={loadComponent}
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? 'LC is on screen' : 'LC is off screen'}
      </button>
      <Suspense fallback={<p>Loading...</p>}>
        {show && <LazyComponent />}
      </Suspense>
    </section>
  );
};

export default NewHome;
