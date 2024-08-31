function Greeting({ subject }) {
  // try {
  return <div>Hello {subject.toUpperCase()}</div>;
  // } catch (error) {
  //   return <ErrorFallback error={error} />;
  // }
}

function Farewell({ subject }) {
  // try {
  return <div>Goodbye {subject.toUpperCase()}</div>;
  // } catch (error) {
  //   return <ErrorFallback error={error} />;
  // }
}

export default function FunctionalComponent() {
  try {
    return (
      <div>
        <Greeting subject="Hi there" />
        <Farewell />
      </div>
    );
  } catch (error) {
    return <ErrorFallback error={error} />;
  }
}

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}