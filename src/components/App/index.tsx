import React from 'react';
import styles from './App.module.scss';
import Header from "../Header";
import {Route, Routes} from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import Home from "../Home";
import Sidebar from "../Sidebar";
// import Weekend from "../Weekend/Weekend";
import Divisions from "../Divisions";
import Footer from "../Footer";

function App() {
  return (
    <div>
      <div className={styles.wrapper}>
          <Header/>
          <Sidebar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              {/*<Route path="/weekend" element={<Weekend/>}/>*/}
              <Route path="/divisions" element={<Divisions/>}/>
          </Routes>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
