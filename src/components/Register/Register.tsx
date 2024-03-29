/* eslint-disable */
import React, {useEffect, useRef} from 'react';
import styles from "../Register/Register.module.scss";
import {useAppDispatch} from "../../redux/hooks";
import {useSelector} from "react-redux";

import {
    changeButtonValue,
    changeLoginFlagValue,
    changeLoginValue, changePasswordFlagValue,
    changePasswordValue, changeRepeatPasswordFlagValue,
    changeRepeatPasswordValue, noticeFlagToOff, registerFlagToOff,
    selectReg, setLocalStorageItem,
} from "../../redux/slice/registerSlice";
import {useNavigate} from "react-router-dom";

const Register = () => {

    const dispatch = useAppDispatch()

    const {
        login,
        password,
        repeatPassword,
        loginFlag,
        passwordFlag,
        repeatPasswordFlag,
        buttonValue,
        registerFlag,
        noticeFlag
    } = useSelector(selectReg)

    const navigate = useNavigate()



    const useControlLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeLoginValue(event.target.value))
    }
    const controlPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changePasswordValue(event.target.value))
    }
    const controlRepeatPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeRepeatPasswordValue(event.target.value))
    }

    const checkValidateLogin = () => login.length < 2 ? dispatch(changeLoginFlagValue(true)) : dispatch(changeLoginFlagValue(false))
    const checkValidatePassword = () => password.length < 2 ? dispatch(changePasswordFlagValue(true)) : dispatch(changePasswordFlagValue(false))
    const checkValidateRepeatPassword = () => password.length < 2 ? dispatch(changeRepeatPasswordFlagValue(true)) : dispatch(changeRepeatPasswordFlagValue(false))


    const clickEnterLocalStorageData = (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault()
        dispatch(setLocalStorageItem(`${login} ${password}`))
    }


    useEffect(() => {
        if (login.length > 0) {
            checkValidateLogin()
        }
        if (password.length > 0) {
            checkValidatePassword()
        }
        if (repeatPassword.length > 0) {
            checkValidateRepeatPassword()
        }
        if (login.length >= 2 && password.length >= 2 && password === repeatPassword) {
            dispatch(changeButtonValue(false))
        }
        if (registerFlag) {
            setTimeout(() => {
                dispatch(registerFlagToOff())
                navigate('/login')
            }, 5000)
        }
        if(noticeFlag){
            setTimeout(() => {
                dispatch(noticeFlagToOff())
            }, 3000)
        }
    }, [login, password, repeatPassword, registerFlag,noticeFlag])



    return (
        <form>
            <h2 style={{textAlign: "center"}}>Регистрация</h2>
            <div className={styles.wrapper}>
                {registerFlag &&
                    <div style={{padding: "2rem", backgroundColor: "green", borderRadius: "50%"}}>регистрация
                        успешна</div>}
                {noticeFlag && <div style={{
                    padding: "2rem",
                    backgroundColor: "red",
                    borderRadius: "50px",
                    width: "300px",
                    paddingRight: "2rem"
                }}>Такой пользователь уже существует</div>}
                <label className={styles.label}>Логин</label>
                {loginFlag && <span className={styles.spanError}>Недостаточное количество символов</span>}
                <input className={loginFlag ? styles.input + " " + styles.notValid : styles.input} placeholder="Логин"
                       value={login}
                       onChange={useControlLogin} onBlur={() => checkValidateLogin()}/>
                <label className={styles.label}>Пароль</label>
                {passwordFlag && <span className={styles.spanError}>Недопустимый пароль</span>}
                <input className={passwordFlag ? styles.input + " " + styles.notValid : styles.input}
                       onBlur={() => checkValidatePassword()} value={password} type="password"
                       onChange={event => controlPassword(event)}
                       placeholder="Пароль"/>
                <label className={styles.label}>Повторите пароль </label>
                {repeatPasswordFlag && password !== repeatPassword &&
                    <span className={styles.spanError}>Недостаточное количество символов</span>}
                <input className={styles.input} value={repeatPassword} type="password"
                       onBlur={() => checkValidateRepeatPassword()} onChange={event => controlRepeatPassword(event)}
                       placeholder="Пароль"/>
                <input className={styles.btn} type='submit' value="Регистрация" disabled={buttonValue}
                       onClick={clickEnterLocalStorageData} />
            </div>
        </form>
    );
};

export default Register;