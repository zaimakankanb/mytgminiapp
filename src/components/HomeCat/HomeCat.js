// HomeCat.js
import React from 'react';
import './HomeCat.css'; // 引入外部 CSS 文件

function Cat() {
  return (
    <div className="cat">
      <div className="ear ear--left"></div>
      <div className="ear ear--right"></div>
      <div className="face">
        <div className="eye eye--left">
          <div className="eye-pupil"></div>
        </div>
        <div className="eye eye--right">
          <div className="eye-pupil"></div>
        </div>
        <div className="muzzle"></div>
      </div>
    </div>
  );
}

export default Cat;
