import React, { useEffect, useState } from 'react';
import { BsCartFill } from 'react-icons/bs';
import { CgLogIn } from 'react-icons/cg';
import { FaUserPlus } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiLogOut } from 'react-icons/fi';
import {
  changeBurgerOpenFlag,
  changeImageFlagTrue,
  selectLog,
} from '../../redux/slice/loginSLice';
import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import { useAppDispatch } from '../../redux/hooks';
import {
  BurgerIcon, CloseIcon, LittleIcon, ProfileIcon,
} from '../../assets/home/svgs/littleIcon';
import { objectForLinks } from '../../data/homeData';
import image from '../../assets/header/user.jpg';
import { authOptions, logout, refresh } from '../../redux/slice/authSlice';
import Cart from '../Cart';
import { cartToggleFlag, selectCart } from '../../redux/slice/cartSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const {
    imageFlag,
  } = useSelector(authOptions);

  const {
    loadingImgFlag,
    currentUserFind,
    burgerOpen,
  } = useSelector(selectLog);

  const {
    cartFlag,
  } = useSelector(selectCart);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const onBurgerOpenFlag = (act: boolean) => {
    dispatch(changeBurgerOpenFlag(act));
  };
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(refresh());
    }
  }, []);

  useEffect(() => {
    if (image) {
      dispatch(changeImageFlagTrue());
    }
    if (burgerOpen || cartFlag) {
      document.body.classList.add('overflowOff');
      console.log(cartFlag);
    }
    if (windowWidth >= 768 && !burgerOpen && !cartFlag) {
      document.body.classList.remove('overflowOff');
      if (burgerOpen) onBurgerOpenFlag(false);
    }
    // if (!cartFlag && ) {
    //   document.body.classList.remove('overflowOff');
    // }
    console.log(cartFlag);
  }, [image, burgerOpen, windowWidth, cartFlag]);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    // handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onClickLogOut = () => {
    dispatch(logout());
  };

  const { pathname } = useLocation();

  return (
    <>
      <div className={styles.adaptive}>
        <div className={burgerOpen ? styles.modalBurger : styles.displayNone}>
          <div className={styles.modalHeader}>
            <div className={styles.modalIcon}><LittleIcon /></div>
            <div className={styles.closeIcon} onClick={() => onBurgerOpenFlag(false)}>
              <CloseIcon />
            </div>
          </div>
          <div className={styles.burgerMenu}>
            {
               objectForLinks.map(({
                 linkName,
                 id,
                 linkTo,
               }) => {
                 return (
                   <div className={styles.burgerMenuBlock} key={id}>
                     <Link
                       to={linkTo}
                       className={styles.burgerMenuLink}
                       onClick={() => onBurgerOpenFlag(false)}
                     >
                       {' '}
                       {linkName}
                       {' '}
                     </Link>
                   </div>
                 );
               })
                      }
          </div>
        </div>
        <button
          className={styles.burgerIcon}
          onClick={() => onBurgerOpenFlag(true)}
          aria-label="burger"
        >
          <BurgerIcon />
        </button>
        <div className={styles.mainIconSmall}><Link to="/"><LittleIcon /></Link></div>
        <div className={styles.iconProfile}><ProfileIcon /></div>
      </div>
      <div className={styles.root}>
        <div className={styles.imgWrapper}>
          <Link to="/">
            <img src={logo} className={styles.img} alt="mainLogo" />
          </Link>
        </div>

        <div className={styles.tabs}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <button className={styles.linkCart} onClick={() => dispatch(cartToggleFlag())}>
            <span className={styles.cart}>
              <BsCartFill style={{ color: 'white' }} size="2rem" />
              <span className={styles.cartSpan}>0</span>
            </span>
          </button>
          {pathname !== '/login' && (!imageFlag)
                    && (
                    <Link to="login" className={styles.login}>
                      <h5 style={{ color: 'white' }}>Login</h5>
                      <CgLogIn color="white" size="1.5rem" />
                    </Link>
                    )}
          {pathname !== '/register' && (!imageFlag)
                    && (
                    <Link to="/register" className={styles.register}>
                      <h5 style={{ color: 'white' }}>Register</h5>
                      <FaUserPlus color="white" size="1.5rem" />
                    </Link>
                    )}
          {loadingImgFlag ? <span>Загрузка...</span>
            : (imageFlag) && (
            <div style={{ position: 'relative' }}>
              <img src={image} className={styles.imgLogin} alt="loginImg" />
              <span className={styles.loginName}>{currentUserFind}</span>
              <FiLogOut className={styles.loginOut} size="2rem" onClick={onClickLogOut} />
            </div>
            )}
        </div>
      </div>
      <div className={cartFlag ? styles.modalCartOn : styles.modalCart} />
      <div className={cartFlag ? `${styles.cartWrapperOn} ${styles.cartWrapperTransitionOn}` : `${styles.cartWrapper} ${styles.cartWrapperTransition}`}><Cart /></div>
    </>
  );
};

export default Header;

// TODO В случае неправильного ввода логина и регистрации показывать уведомление
// TODO Очистка полей ввода при переходе с Логина на регистрацию и т.д.
// TODO Уведомление о регистрации и логине
