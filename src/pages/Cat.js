// pages/Cat.js

import React from 'react';
import styles from '../assets/styles/Cat.module.css'; // 将 CSS 样式放入这个文件

function Cat() {
  return (
    <div id="app" className={styles.catApp}>
      <div className={styles.stage}>
        <div className={styles.background}></div>
        <div className={styles.cat}>
          <div className={styles.body}>
            <div className={styles.tail}></div>
          </div>
          <div className={styles.foreLegs}></div>
          <div className={styles.face}>
            <div className={styles.eyes}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cat;