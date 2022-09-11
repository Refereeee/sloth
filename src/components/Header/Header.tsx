import React, {useEffect} from 'react';
import styles from './Header.module.scss'
import logo from '../../assets/logo.png'
import {BsCartFill} from "react-icons/bs";
import {CgLogIn} from "react-icons/cg";
import {FaUserPlus} from "react-icons/fa";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {changeImageFlagFalse, changeImageFlagTrue, selectLog} from "../../redux/slice/loginSLice";
import {FiLogOut} from "react-icons/fi";
import {useAppDispatch} from "../../redux/hooks";

const Header = () => {

    const dispatch = useAppDispatch()

    const {headerImageFlag, image, loadingImgFlag,currentUserFind} = useSelector(selectLog)

    useEffect(()=>{
        if(image) {
            dispatch(changeImageFlagTrue())
        }
    },[])

    const onClickLogOut = () =>{
        dispatch(changeImageFlagFalse())
    }

    const {pathname} = useLocation();


    return (
        <div className={styles.root}>
            <div className={styles.imgWrapper}>
                <img src={logo} className={styles.img} alt='sloth'/>
            </div>
            <div className={styles.tabs}>
                <a href="#" className={styles.linkCart}>
                    <h4>Cart</h4>
                    <span className={styles.cart}>
                        <BsCartFill size='2rem'/>
                        <span className={styles.cartSpan}>0</span>
                    </span>
                </a>
                {pathname !== '/login' && !headerImageFlag &&
                    <Link to='login' className={styles.login}>
                        <h4>Login</h4>
                        <CgLogIn size="2rem"/>
                    </Link>
                }
                {pathname !== '/register' && !headerImageFlag &&
                    <Link to='/register' className={styles.register}>
                        <h4>Register</h4>
                        <FaUserPlus size='2rem'/>
                    </Link>
                }
                { loadingImgFlag ? <span>Загрузка...</span> :
                     headerImageFlag && <div style={{position:'relative'}}>
                        <img src={image} className={styles.imgLogin} alt="loginImg"/>
                        <span className={styles.loginName}>{currentUserFind}</span>
                        <FiLogOut className={styles.loginOut} size='2rem' onClick={onClickLogOut}/>
                    </div>
                }
            </div>

        </div>
    );
};

export default Header;

//TODO В случае неправильного ввода логина и регистрации показывать уведомление
//TODO Очистка полей ввода при переходе с Логина на регистрацию и т.д.
//TODO Уведомление о регистрации и логине
