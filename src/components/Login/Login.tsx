import React from 'react';
import styles from'./Login.module.scss'

const Login = () => {
    return (
        <div className={styles.wrapper}>
            <label className={styles.label}>Логин
                <input placeholder="Логин"/>
            </label>
            <label className={styles.label}>Пароль
                <input placeholder="Пароль"/>
            </label>
            <input type='button' value="Вход"/>
        </div>
    );
};

export default Login;