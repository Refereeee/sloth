import styles from './Cart.module.scss';
import CartClose from '../../assets/cart/cartClose';
import { useAppDispatch } from "../../redux/hooks";
import { cartToggleFlag } from "../../redux/slice/cartSlice";

const Cart = () => {


  return (
    <div className={styles.root}>
      <div className={styles.headerWrapper}>
        <span className={styles.headerText}>Shopping Cart</span>
        <span onClick={()=>{useAppDispatch(cartToggleFlag())}>
          <CartClose />
        </span>
      </div>
    </div>
  );
};

export default Cart;
