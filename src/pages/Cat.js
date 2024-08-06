import React from 'react';
import catImage from '../assets/cat.png'; // 需要导入一张可爱的猫的图片

function Cat() {
  return (
    <div className="card">
      <h2>Your Virtual Cat</h2>
      <img src={catImage} alt="Cute Cat" style={{ width: '200px', borderRadius: '10px' }} />
      <p>Here is your cute virtual cat!</p>
    </div>
  );
}

export default Cat;
