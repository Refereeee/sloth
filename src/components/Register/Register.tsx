/* eslint-disable */
import React from 'react';
import styles from "../Register/Register.module.scss";
import {useAppDispatch} from "../../redux/hooks";
import {useSelector} from "react-redux";

import {
    changeLoginValue,
    changePasswordValue,
    changeRepeatPasswordValue,
    selectReg
} from "../../redux/slice/registerSlice";

const Register = () => {

    const dispatch = useAppDispatch()

    const {login, password, repeatPassword} = useSelector(selectReg)
    const useControlLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeLoginValue(event.target.value))
    }
    const controlPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changePasswordValue(event.target.value))
    }
    const controlRepeatPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeRepeatPasswordValue(event.target.value))
    }


    return (
        <div className={styles.wrapper}>
            <label className={styles.label}>Логин</label>
            <input className={styles.input} placeholder="Логин" value={login}
                   onChange={event => useControlLogin(event)}/>
            <label className={styles.label}>Пароль</label>
            <input className={styles.input} value={password} onChange={event => controlPassword(event)} placeholder="Пароль"/>
            <label className={styles.label}>Повторите пароль </label>
            <input className={styles.input} value={repeatPassword} onChange={event => controlRepeatPassword(event)} placeholder="Пароль"/>
            <input className={styles.btn} type='button' value="Регистрация"/>
        </div>
    );
};

export default Register;