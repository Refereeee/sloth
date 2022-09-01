import React, {useEffect} from 'react';
import styles from './Header.module.scss'
import logo from '../../assets/logo.png'
import {BsCartFill} from "react-icons/bs";
import {CgLogIn} from "react-icons/cg";
import {FaUserPlus} from "react-icons/fa";
import {Link, useLocation} from "react-router-dom";

const Header = () => {

    const { pathname } = useLocation();


    return (
        <div className={styles.root}>
            <div className={styles.imgWrapper}>
                <img src={logo} className={styles.img} alt='comfy'/>
            </div>
            <div className={styles.nav}>
                <ul className={styles.listLinks}>
                    <li className={styles.navLink}>Home</li>
                    <li className={styles.navLink}>About</li>
                    <li className={styles.navLink}>Products</li>
                </ul>
            </div>
            <div className={styles.tabs}>
                <a href="#" className={styles.linkCart}>
                    <h4>Cart</h4>
                    <span className={styles.cart}>
                        <BsCartFill size='2rem'/>
                        <span className={styles.cartSpan}>0</span>
                    </span>
                </a>
                {pathname!== '/login' &&
                    <Link to='login' className={styles.login}>
                        <h4>Login</h4>
                        <CgLogIn size="2rem"/>
                    </Link>
                }
                {pathname !== '/register' &&
                    <Link to='/register' className={styles.register}>
                        <h4>Register</h4>
                        <FaUserPlus size='2rem'/>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Header;