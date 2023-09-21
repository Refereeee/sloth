import React, {
  useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.scss';
import { useAppDispatch } from '../../redux/hooks';

import {
  noticeFlagToOff, selectReg,
} from '../../redux/slice/registerSlice';
import { authOptions, createUser } from '../../redux/slice/authSlice';
import useInput from '../../hooks/useInput';

interface ChildProps {
  forwardedRef: React.RefObject<HTMLFormElement>;
}

const Register: React.FC<ChildProps> = ({ forwardedRef }) => {
  const dispatch = useAppDispatch();

  const {
    registerFlag,
    noticeFlag,
    headerImageFlagReg,
  } = useSelector(selectReg);

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

  const {
    isAuth,
  } = useSelector(authOptions);

  const navigate = useNavigate();

  const clickCreateUser = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(createUser({ email: email.value, password: password.value }));
  };

  useEffect(() => {
    if (isAuth) {
      setTimeout(() => {
        // dispatch(registerFlagToOff());
        // dispatch(refreshItems());
        navigate('/');
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
  }, [registerFlag, noticeFlag, headerImageFlagReg, isAuth]);

  return (
    <form className={styles.formWrapper} ref={forwardedRef}>
      <div>
        <h2 style={{ textAlign: 'center', color: 'black' }}>Register</h2>
      </div>
      <div className={styles.wrapper}>
        {isAuth
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
          onClick={clickCreateUser}
        />
      </div>
    </form>
  );
};

export default Register;
