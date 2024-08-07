import React, { useEffect, useState } from 'react';
import SakuraAnimation from '../components/SakuraAnimation/SakuraAnimation';
import { getUserById, createUser } from '../api/user';

function Home() {
    const [userId, setUserId] = useState(null);
    const [catFood, setCatFood] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchUserData = async (id) => {
        try {
          let user = await getUserById(id);
          if (!user) {
            user = await createUser(id);
          }
          setCatFood(user.catFood);
        } catch (error) {
          setError(error.message);
        }
      };

      if (window.Telegram && window.Telegram.WebApp) {
        const telegram = window.Telegram.WebApp;
        telegram.ready();
        const user = telegram.initDataUnsafe?.user;
        if (user) {
          setUserId(user.id);
          fetchUserData(user.id);
        } else {
          setError('Unable to retrieve user information.');
        }
      }
      setLoading(false);
    }, []);
  
    return (
      <div className="home-container">
        <SakuraAnimation />
        <div className="card">
          <h2>Welcome!</h2>
          {loading ? (
            <p>Loading user information...</p>
          ) : error ? (
            <p>{error}</p>
          ) : userId ? (
            <>
              <p>Your Telegram User ID: <strong>{userId}</strong></p>
              <p>Cat Food: <strong>{catFood}</strong></p>
            </>
          ) : (
            <p>Unable to retrieve user information.</p>
          )}
        </div>
      </div>
    );
  }
  
  export default Home;
