import React from 'react';
import styles from './App.module.scss';
import Header from "../Header/Header";
import {Route, Routes} from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../Home/Home";
import Sidebar from "../Sidebar/Sidebar";
// import Weekend from "../Weekend/Weekend";
import Divisions from "../Components/Divisions";

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
      </div>
    </div>
  );
}

export default App;
