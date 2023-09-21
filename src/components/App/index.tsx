import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Header from '../Header';
import Home from '../Home';
import Divisions from '../Divisions';
import Footer from '../Footer';
import Weekend from '../Finals';
import Playoff from '../Playoff';
import Modal from '../Modal';

const App = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weekend" element={<Weekend />} />
          <Route path="/divisions" element={<Divisions />} />
          <Route path="/fut-champions-playoffs" element={<Playoff />} />
        </Routes>
        <Footer />
      </div>
      <Modal />
    </div>
  );
};

export default App;
