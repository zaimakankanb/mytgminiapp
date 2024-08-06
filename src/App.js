import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const telegram = window.Telegram.WebApp;
      telegram.ready();
  
      const user = telegram.initDataUnsafe?.user;
      if (user) {
        setUserId(user.id);
      }
      setLoading(false);
    } else {
      console.warn('Telegram WebApp is not available');
      setLoading(false);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>WhosCat</h1>
        {loading ? (
          <p>Loading user information...</p>
        ) : userId ? (
          <p>Your Telegram User ID: {userId}</p>
        ) : (
          <p>Unable to retrieve user information.</p>
        )}
      </header>
    </div>
  );
}

export default App;
