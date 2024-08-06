import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // 初始化 Telegram WebApp 对象
    const telegram = window.Telegram.WebApp;

    // 准备 Telegram WebApp
    telegram.ready();

    // 获取用户信息
    const user = telegram.initDataUnsafe?.user;

    // 如果用户信息存在，设置用户 ID 到状态中
    if (user) {
      setUserId(user.id);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Telegram WebApp</h1>
        {userId ? (
          <p>Your Telegram User ID: {userId}</p>
        ) : (
          <p>Loading user information...</p>
        )}
      </header>
    </div>
  );
}

export default App;
