import React, { useEffect, useState } from 'react';

function App() {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Telegram WebApp 通过 Telegram 对象提供用户信息
    const telegram = window.Telegram.WebApp;
    telegram.ready();
    
    // 获取用户ID并设置到状态中
    const user = telegram.initDataUnsafe?.user;
    if (user) {
      setUserId(user.id);
    }
  }, []);

  return (
    <div className="App">
      <h1>Welcome to the Telegram WebApp!</h1>
      {userId ? (
        <p>Your User ID: {userId}</p>
      ) : (
        <p>Loading your User ID...</p>
      )}
    </div>
  );
}

export default App;
