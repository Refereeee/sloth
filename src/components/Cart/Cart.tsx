import { Link } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../Header/Header.module.scss';
import { cartFlagToFalse, selectCart } from '../../redux/slice/cartSlice';
import CartClose from '../../assets/cart/cartClose';
import { useAppDispatch } from '../../redux/hooks';
import CartItem from '../CartItem';

const Cart = () => {
  const dispatch = useAppDispatch();
  const { items, subtotal } = useSelector(selectCart);
  return (
    <>
      <div className={styles.headerWrapper}>
        <span className={styles.headerText}>
          Shopping Cart
          {items?.length ? `(${items.length} items)` : ''}
        </span>
        <span className={styles.closeIcon} onClick={() => dispatch(cartFlagToFalse())}>
          <CartClose />
        </span>
      </div>

      {
        !items?.length ? (
          <div className={styles.main}>
            <div className={styles.info}>
              <div>
                <span className={styles.infoHead}>Your shopping cart is empty</span>
                {/* eslint-disable-next-line */}
                <span
                  className={styles.infoDesc}
                >
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Don't wait, let's get shopping and find your next deal today!
                </span>
                <div className={styles.buttons}>
                  <button className={styles.offCart} onClick={() => dispatch(cartFlagToFalse())}>
                    Start shopping
                  </button>
                  <Link to="/register" className={styles.register} onClick={() => dispatch(cartFlagToFalse())}>
                    <h5 style={{ color: 'white' }}>Sign up</h5>
                    <FaUserPlus color="white" size="1.5rem" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.cartsWrapper}>
              {items.map((item) => (
                <div className={styles.cartBox}>
                  <CartItem key={item.id} {...item} />
                </div>
              ))}
            </div>
            <div className={styles.cartTotal}>
              <div className={styles.subTotal}>
                <span>{subtotal}</span>
              </div>
              <div>
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button />
              </div>
            </div>
          </>
        )
      }
    </>
  );
};

export default Cart;
