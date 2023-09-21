import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import {
  selectLog,
  setLoginFailToggle,
  setLoginSuccessToFalse,
// eslint-disable-next-line import/extensions
} from '../../redux/slice/loginSLice';
import { authOptions, loginUser } from '../../redux/slice/authSlice';
import useInput from '../../hooks/useInput';

interface ChildProps {
  forwardRef: React.RefObject<HTMLFormElement>;
}

const Login: React.FC<ChildProps> = ({ forwardRef }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { isAuth } = useSelector(authOptions);

  const {
    headerImageFlagLogin,
    loginSuccess,
    loginFail,
  } = useSelector(selectLog);

  const email = useInput('', {
    isEmpty: true,
    minLength: 3,
    maxLength: 32,
    isEmail: false,
  });
  const password = useInput('', {
    isEmpty: true,
    minLength: 3,
    maxLength: 32,
  });

  const clickLoginUser = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(loginUser({ email: email.value, password: password.value }));
  };

  useEffect(() => {
    if (loginSuccess) {
      setTimeout(() => {
        navigate('/');
        dispatch(setLoginSuccessToFalse());
      }, 1000);
    }
    if (loginFail) {
      setTimeout(() => {
        dispatch(setLoginFailToggle());
      }, 3000);
    }
    if (isAuth) {
      setTimeout(() => {
        navigate('/');
      }, 500);
    }
  }, [headerImageFlagLogin, loginSuccess, pathname, loginFail, isAuth]);

  return (
    <form className={styles.formWrapper} ref={forwardRef}>
      <div>
        <h2 style={{ textAlign: 'center', color: 'black' }}>Login</h2>
      </div>
      <div className={styles.wrapper}>
        {isAuth && <div style={{ padding: '2rem', backgroundColor: 'green' }}>Авторизация успешна</div>}
        {loginFail && <div style={{ padding: '2rem', backgroundColor: 'green' }}>Неправильный логин или пароль</div>}
        <div className={styles.forErrors}>
          {(email.isDirty && email.isEmpty) && <div style={{ color: 'red', whiteSpace: 'nowrap' }}>Поле не может быть пустым</div>}
          {(email.isDirty && email.minLengthError) && <div style={{ color: 'red', whiteSpace: 'nowrap' }}>Малое количество символов</div>}
          {(email.isDirty && email.maxLengthError) && <div style={{ color: 'red', whiteSpace: 'nowrap' }}>Поле не должно превышать 32 символа</div>}
          {(email.isDirty && email.emailError) && <div style={{ color: 'red', whiteSpace: 'nowrap' }}>Не валидный Email</div>}
        </div>
        <input
          className={styles.input}
          placeholder="Логин"
          value={email.value}
          id="regLogin"
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          name="log"
        />
        <div className={styles.forErrorsPassword}>
          {(password.isDirty && password.isEmpty) && <div style={{ color: 'red', whiteSpace: 'nowrap' }}>Поле не может быть пустым</div>}
          {(password.isDirty && password.minLengthError) && <div style={{ color: 'red', whiteSpace: 'nowrap' }}>Малое количество символов</div>}
          {(password.isDirty && password.maxLengthError) && <div style={{ color: 'red', whiteSpace: 'nowrap' }}>Поле не должно превышать 32 символа</div>}
        </div>
        <input
          className={styles.input}
          onBlur={(e) => password.onBlur(e)}
          value={password.value}
          type="password"
          onChange={(e) => password.onChange(e)}
          placeholder="Пароль"
          id="regPass"
          name="pass"
        />
        <input
          className={styles.btn}
          type="submit"
          value="Регистрация"
          disabled={!email.inputValid || !password.inputValid}
          onClick={clickLoginUser}
        />
      </div>
    </form>
  );
};

export default Login;
