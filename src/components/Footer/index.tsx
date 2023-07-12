import React from 'react';
import logo from '../../assets/logo.png';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img src={logo} alt="logo" className={styles.logo} />
        <span className={styles.text}>
          © Overgear 2018-2022. All rights reserved. Diagorou 4, Kermia Building, 6th floor, Nicosia, Cyprus. Reg. number: HE395043
        </span>
      </div>
    </div>
  );
};

export default Footer;
