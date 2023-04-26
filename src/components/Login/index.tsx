import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import {
  changeButtonValue,
  changeLoginFlagValue,
  changeLoginValue,
  changePasswordFlagValue,
  changePasswordValue,
  selectLog,
  setLoginFailToggle,
  setLoginSuccessToFalse,
// eslint-disable-next-line import/extensions
} from '../../redux/slice/loginSLice';
import { authOptions, loginUser } from '../../redux/slice/authSlice';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { isAuth } = useSelector(authOptions);

  const {
    login,
    password,
    loginFlag,
    passwordFlag,
    buttonValue,
    headerImageFlagLogin,
    loginSuccess,
    loginFail,
  } = useSelector(selectLog);

  const useControlLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeLoginValue(event.target.value));
  };
  const controlPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changePasswordValue(event.target.value));
  };
  const checkValidateLogin = () => (login.length < 2 ? dispatch(changeLoginFlagValue(true)) : dispatch(changeLoginFlagValue(false)));
  const checkValidatePassword = () => (password.length < 2 ? dispatch(changePasswordFlagValue(true)) : dispatch(changePasswordFlagValue(false)));

  const clickLocalStorageData = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(loginUser({ login, password }));
  };

  useEffect(() => {
    if (login.length > 0) {
      checkValidateLogin();
    }
    if (password.length > 0) {
      checkValidatePassword();
    }
    if (login.length >= 2 && password.length >= 2) {
      dispatch(changeButtonValue(false));
    }
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
  }, [login, password, loginFlag, headerImageFlagLogin, loginSuccess, pathname, loginFail, isAuth]);

  return (
    <form>
      <div className={styles.formWrapper}>
        <h2 style={{ textAlign: 'center', color: 'black' }}>Login</h2>
      </div>
      <div className={styles.wrapper}>
        {loginSuccess && <div style={{ padding: '2rem', backgroundColor: 'green' }}>Авторизация успешна</div>}
        {loginFail && <div style={{ padding: '2rem', backgroundColor: 'green' }}>Неправильный логин или пароль</div>}
        {loginFlag && <span className={styles.spanError}>Недостаточное количество символов</span>}
        <input
          className={loginFlag ? `${styles.input} ${styles.notValid}` : styles.input}
          placeholder="Enter login"
          value={login}
          onChange={useControlLogin}
          onBlur={() => checkValidateLogin()}
        />
        {passwordFlag && <span className={styles.spanError}>Недопустимый пароль</span>}
        <input
          className={passwordFlag ? `${styles.input} ${styles.notValid}` : styles.input}
          onBlur={() => checkValidatePassword()}
          value={password}
          type="password"
          onChange={(event) => controlPassword(event)}
          placeholder="Enter password"
        />
        <input
          className={styles.btn}
          type="submit"
          value="Войти"
          disabled={buttonValue}
          onClick={clickLocalStorageData}
        />
      </div>
    </form>
  );
};

export default Login;
