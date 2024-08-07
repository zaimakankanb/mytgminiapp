import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Cat from './pages/Cat';
import Friend from './pages/Friend';
import './App.css';
import HomeCat from './components/HomeCat/HomeCat';
import { getUserById, createUser } from './api/user'; // 导入用户 API

function App() {
  useEffect(() => {
    const initUser = async () => {
      try {
        // 从 Telegram SDK 获取用户 ID
        const userId = window.Telegram.WebApp.initDataUnsafe.user.id;

        // 检查用户是否存在
        const user = await getUserById(userId);

        if (!user) {
          // 如果用户不存在，创建用户
          await createUser(userId);
          console.log(`User with ID ${userId} created.`);
        } else {
          console.log(`User with ID ${userId} already exists.`);
        }
      } catch (error) {
        console.error('Error initializing user:', error);
      }
    };

    if (window.Telegram && window.Telegram.WebApp) {
      const themeParams = window.Telegram.WebApp.themeParams;

      // 设置CSS变量以适应主题
      document.documentElement.style.setProperty('--tg-theme-bg-color', themeParams.bg_color || '#ffffff');
      document.documentElement.style.setProperty('--tg-theme-text-color', themeParams.text_color || '#000000');
      document.documentElement.style.setProperty('--tg-theme-link-color', themeParams.link_color || '#1b95e0');
      document.documentElement.style.setProperty('--tg-theme-button-color', themeParams.button_color || '#1b95e0');
      document.documentElement.style.setProperty('--tg-theme-button-text-color', themeParams.button_text_color || '#ffffff');

      // 初始化用户信息
      initUser();
    }

    // 动态生成猫爪印
    const generatePaws = () => {
      const container = document.querySelector('.paw-container');
      if (container) {
        for (let i = 0; i < 20; i++) {
          const paw = document.createElement('div');
          paw.className = 'paw';
          paw.style.left = `${Math.random() * 100}%`;
          paw.style.animationDelay = `${Math.random() * 5}s`;
          paw.style.opacity = Math.random();
          container.appendChild(paw);
        }
      }
    };

    generatePaws();
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="paw-container"></div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cat" element={<Cat />} />
            <Route path="/friend" element={<Friend />} />
          </Routes>
        </main>
        <HomeCat />
        <footer className="App-footer">
          <nav className="App-tabs">
            <NavLink to="/" className="App-tab" activeClassName="active">
              <img src="/icons/home.svg" alt="Home" />
              <span>Home</span>
            </NavLink>
            <NavLink to="/cat" className="App-tab" activeClassName="active">
              <img src="/icons/cat.svg" alt="Cat" />
              <span>Cat</span>
            </NavLink>
            <NavLink to="/friend" className="App-tab" activeClassName="active">
              <img src="/icons/friend.svg" alt="Friend" />
              <span>Friend</span>
            </NavLink>
          </nav>
        </footer>
      </div>
    </Router>
  );
}

export default App;
