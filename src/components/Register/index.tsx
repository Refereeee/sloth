import React, {
  ChangeEvent, FocusEvent, useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.scss';
import { useAppDispatch } from '../../redux/hooks';

import {
  changeButtonValue,
  changeLoginFlagValue,
  changeLoginValue, changePasswordFlagValue,
  changePasswordValue, changeRepeatPasswordFlagValue,
  changeRepeatPasswordValue, noticeFlagToOff, registerFlagToOff,
  selectReg,
} from '../../redux/slice/registerSlice';
import { refreshItems } from '../../redux/slice/loginSLice';
import { authOptions, createUser } from '../../redux/slice/authSlice';

const Register = () => {
  const dispatch = useAppDispatch();

  const {
    loginFlag,
    passwordFlag,
    buttonValue,
    registerFlag,
    noticeFlag,
    headerImageFlagReg,
  } = useSelector(selectReg);

  interface Validations {
    isEmpty: boolean,
    minLength: number,
    maxLength: number,
    isEmail: boolean
  }

  const useValidation = (value:string, validations:Validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    useEffect(() => {
      // eslint-disable-next-line guard-for-in
      for (const validation in validations) {
        switch (validation) {
          case 'minLength':
            value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
            break;
          case 'isEmpty':
            value ? setEmpty(false) : setEmpty(true);
            break;
          case 'maxLength':
            value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
            break;
          case 'isEmail':
            // eslint-disable-next-line no-case-declarations
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // eslint-disable-next-line no-unused-expressions
            re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
            break;
          default:
        }
      }
    }, [value]);
    return {
      isEmpty,
      minLengthError,
      maxLengthError,
      emailError,
    };
  };

  const useInput = (initialValue:string, validations:Validations) => {
    const [value, setValue] = useState<string>(initialValue);
    const [isDirty, setDirty] = useState<boolean>(false);
    const valid = useValidation(value, validations);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    const onBlur = (event: FocusEvent<HTMLInputElement>) => {
      setDirty(true);
    };

    return {
      value,
      onChange,
      onBlur,
      ...valid,
      isDirty,
    };
  };

  const email = useInput('', { isEmpty: true, minLength: 3 });
  const password = useInput('', { isEmpty: true, minLength: 3 });

  const [loginError, setLoginError] = useState<string>('Email не может быть пустым');
  const [passwordError, setPasswordError] = useState<string>('Password не может быть пустым');

  const {
    isAuth,
  } = useSelector(authOptions);

  const navigate = useNavigate();

  const useControlLogin = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeLoginValue(event.target.value));
  };
  const controlPassword = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changePasswordValue(event.target.value));
  };
  const controlRepeatPassword = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeRepeatPasswordValue(event.target.value));
  };

  // const blurHandler = (event:any) =>{
  //   switch (event.target.name){
  //     case
  //   }
  // }
  const checkValidateLogin = () => (login.length < 2
    ? dispatch(changeLoginFlagValue(true))
    : dispatch(changeLoginFlagValue(false)));
  const checkValidatePassword = () => (password.length < 2
    ? dispatch(changePasswordFlagValue(true))
    : dispatch(changePasswordFlagValue(false)));
  const checkValidateRepeatPassword = () => dispatch(changeRepeatPasswordFlagValue(true));

  const clickCreateUser = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(createUser({ login, password }));
  };

  useEffect(() => {
    if (login.length > 0) {
      checkValidateLogin();
    }
    if (password.length > 0) {
      checkValidatePassword();
    }
    if (repeatPassword.length > 0) {
      checkValidateRepeatPassword();
    }
    if (login.length >= 2 && password.length >= 2 && password === repeatPassword) {
      dispatch(changeButtonValue(false));
    }
    if (registerFlag) {
      setTimeout(() => {
        dispatch(registerFlagToOff());
        dispatch(refreshItems());
        navigate('/login');
      }, 5000);
    }
    if (noticeFlag) {
      setTimeout(() => {
        dispatch(noticeFlagToOff());
      }, 3000);
    }
    if (isAuth) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [login, password, repeatPassword, registerFlag, noticeFlag, headerImageFlagReg, isAuth]);

  return (
    <form>
      <div className={styles.formWrapper}>
        <h2 style={{ textAlign: 'center', color: 'black' }}>Регистрация</h2>
      </div>
      <div className={styles.wrapper}>
        {registerFlag
                    && (
                    <div style={{ padding: '2rem', backgroundColor: 'green', borderRadius: '50%' }}>
                      регистрация
                      успешна
                    </div>
                    )}
        {noticeFlag && (
        <div style={{
          padding: '2rem',
          backgroundColor: 'red',
          borderRadius: '50px',
          width: '300px',
          paddingRight: '2rem',
        }}
        >
          Такой пользователь уже существует
        </div>
        )}
        <label className={styles.label} htmlFor="regLogin">
          Логин
          {loginFlag && <span className={styles.spanError}>Недостаточное количество символов</span>}
          <input
            className={loginFlag ? `${styles.input} + " " + ${styles.notValid}` : styles.input}
            placeholder="Логин"
            value={email.value}
            id="regLogin"
            onChange={(e) => email.onChange(e)}
            onBlur={(e) => email.onBlur(e)}
            name="log"
          />
        </label>
        <label className={styles.label} htmlFor="regPass">
          Пароль
          {passwordFlag && <span className={styles.spanError}>Недопустимый пароль</span>}
          <input
            className={passwordFlag ? `${styles.input} ${styles.notValid}` : styles.input}
            onBlur={() => checkValidatePassword()}
            value={password}
            type="password"
            onChange={(event) => controlPassword(event)}
            placeholder="Пароль"
            id="regPass"
            name="pass"
          />
        </label>
        {/* <label className={styles.label} htmlFor="repPass"> */}
        {/*  Повторите пароль */}
        {/*  {repeatPasswordFlag && repeatPassword !== password */}
        {/*    && <span className={styles.spanError}>Пароли не совпадают</span>} */}
        {/*  <input */}
        {/*    className={styles.input} */}
        {/*    value={repeatPassword} */}
        {/*    type="password" */}
        {/*    onBlur={() => checkValidateRepeatPassword()} */}
        {/*    onChange={(event) => controlRepeatPassword(event)} */}
        {/*    placeholder="Пароль" */}
        {/*    id="repPass" */}
        {/*    name="repPass" */}
        {/*  /> */}
        {/* </label> */}
        <input
          className={styles.btn}
          type="submit"
          value="Регистрация"
          disabled={buttonValue}
          onClick={clickCreateUser}
        />
      </div>
    </form>
  );
};

export default Register;
