import React, { useEffect, useState } from 'react';

function Home() {
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
    }
    setLoading(false);
  }, []);

  return (
    <div className="card">
      <h2>Welcome!</h2>
      {loading ? (
        <p>Loading user information...</p>
      ) : userId ? (
        <p>Your Telegram User ID: <strong>{userId}</strong></p>
      ) : (
        <p>Unable to retrieve user information.</p>
      )}
    </div>
  );
}

export default Home;
