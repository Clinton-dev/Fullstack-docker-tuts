import { useEffect, useState } from 'react'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;


function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch(`${apiBaseUrl}/api/hello`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Failed to connect to backend'));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>React + Docker</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
