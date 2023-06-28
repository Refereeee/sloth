import { Link } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import React from 'react';
import styles from '../Header/Header.module.scss';
import { cartFlagToFalse } from '../../redux/slice/cartSlice';
import CartClose from '../../assets/cart/cartClose';
import { useAppDispatch } from '../../redux/hooks';

const Cart = () => {
  const dispatch = useAppDispatch();
  // const { items } = useSelector(selectCart);
  return (
    <>
      <div className={styles.headerWrapper}>
        <span className={styles.headerText}>Shopping Cart</span>
        <span className={styles.closeIcon} onClick={() => dispatch(cartFlagToFalse())}>
          <CartClose />
        </span>
      </div>
      <div className={styles.main}>
        <div className={styles.info}>
          <span className={styles.infoHead}>Your shopping cart is empty</span>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <span className={styles.infoDesc}>Don't wait, let's get shopping and find your next deal today!</span>
          <div className={styles.buttons}>
            <button className={styles.offCart} onClick={() => dispatch(cartFlagToFalse())}>Start shopping</button>
            <Link to="/register" className={styles.register}>
              <h5 style={{ color: 'white' }}>Sign up</h5>
              <FaUserPlus color="white" size="1.5rem" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
