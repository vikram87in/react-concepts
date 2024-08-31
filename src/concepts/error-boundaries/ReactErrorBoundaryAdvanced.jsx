import { useRef, useState } from 'react';
import { ErrorBoundary, useErrorBoundary } from 'react-error-boundary';

function makeCall() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej('rejected due to failure');
      // res('resolved after 3 secs');
    }, 2000);
  });
}

function Greeting({ subject }) {
  const [response, setResponse] = useState('');
  const [err, setErr] = useState('');
  // const { showBoundary } = useErrorBoundary();
  const handleClick = () => {
    makeCall()
      .then(val => setResponse(val))
      // .catch(err => showBoundary(err));
      .catch(err => setErr(err));
  };

  if (err) {
    throw new Error('some fault occurred');
  }
  return <div>Hello {subject.toUpperCase()}
    <br />
    <button onClick={handleClick}>Click</button>
    {response && <>
      <br />
      {response}
    </>
    }
  </div>;
}


export default function ReactErrorBoundaryAdvanced() {
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