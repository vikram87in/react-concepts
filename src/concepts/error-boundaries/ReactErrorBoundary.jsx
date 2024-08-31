import { useRef, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function Greeting({ subject }) {

  return (
    <div>
      Hello {subject.toUpperCase()}
    </div>
  );
}

function Farewell({ subject }) {
  if (subject.toLowerCase() == 'bomb')
    throw new Error('💥Boom💥');
  return <div>Goodbye {subject.toUpperCase()}</div>;
}

export default function ReactErrorBoundary() {
  const [val, setVal] = useState('');
  const inputRef = useRef(null);

  const onReset = () => {
    setVal('');
    inputRef.current.focus();
  };

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={onReset}>
        <Greeting subject={val} />
        <Farewell subject={val} />
      </ErrorBoundary>
      <input type="text" ref={inputRef} value={val} onChange={e => setVal(e.target.value)} />
    </>
  );
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}