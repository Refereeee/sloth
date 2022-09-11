import React from 'react';
import styles from './App.module.scss';
import Header from "../Header/Header";
import {Route, Routes} from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../Home/Home";

function App() {
    return (
        <div>
            <div className={styles.wrapper}>
                <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                    </Routes>
            </div>
        </div>
    );
}

export default App;
