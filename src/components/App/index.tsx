import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Header from '../Header';
import Login from '../Login';
import Register from '../Register';
import Home from '../Home';
import Sidebar from '../Sidebar';
import Divisions from '../Divisions';
import Footer from '../Footer';
import Weekend from '../Finals';
import Playoff from '../Playoff';

const App = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <Header/>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/weekend" element={<Weekend/>}/>
          <Route path="/divisions" element={<Divisions/>}/>
          <Route path="/playoffs" element={<Playoff/>}/>
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
