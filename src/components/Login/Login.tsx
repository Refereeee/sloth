import React, {useEffect, useRef} from 'react';
import styles from './Login.module.scss'
import {useAppDispatch} from "../../redux/hooks";
import {useSelector} from "react-redux";
import {
    changeButtonValue,
    changeLoginFlagValue,
    changeLoginValue,
    changePasswordFlagValue,
    changePasswordValue, clearInputFields, fetchUserByImage,
    selectLog,
    setLocalStorageItem, setLoginFailToggle, setLoginSuccessToFalse
} from "../../redux/slice/loginSLice";
import {useLocation, useNavigate} from "react-router-dom";

const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {pathname} = useLocation();


    const {
        login,
        password,
        loginFlag,
        passwordFlag,
        buttonValue,
        headerImageFlag,
        loginSuccess,
        loginFail
    } = useSelector(selectLog)



    const useControlLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeLoginValue(event.target.value))
    }
    const controlPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changePasswordValue(event.target.value))
    }
    const checkValidateLogin = () => login.length < 2 ? dispatch(changeLoginFlagValue(true)) : dispatch(changeLoginFlagValue(false))
    const checkValidatePassword = () => password.length < 2 ? dispatch(changePasswordFlagValue(true)) : dispatch(changePasswordFlagValue(false))



    const clickLocalStorageData = (event: React.MouseEvent<HTMLInputElement>) => {
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
        if (login.length >= 2 && password.length >= 2) {
            dispatch(changeButtonValue(false))
        }
        if (headerImageFlag) {
            dispatch(fetchUserByImage());
        }
        if (loginSuccess) {
            setTimeout(()=>{
                navigate('/')
                dispatch(setLoginSuccessToFalse());
            },1000)
        }
        if(loginFail){
            console.log(loginFail)
            setTimeout( ()=>{
                dispatch(setLoginFailToggle())
            },3000)
        }

    }, [login, password, loginFlag, headerImageFlag, loginSuccess,pathname,loginFail])


    return (
        <form >
            <div className={styles.formWrapper}>
            <h2 style={{textAlign: "center",color:"black"}}>Login</h2>
            </div>
            <div className={styles.wrapper}>
                {loginSuccess && <div style={{padding: "2rem", backgroundColor: "green"}}>Авторизация успешна</div>}
                {loginFail && <div style={{padding: "2rem", backgroundColor: "green"}}>Неправильный логин или пароль</div>}
                {loginFlag && <span className={styles.spanError}>Недостаточное количество символов</span>}
                <input className={loginFlag ? styles.input + " " + styles.notValid : styles.input}
                       placeholder="Enter login"
                       value={login}
                       onChange={useControlLogin} onBlur={() => checkValidateLogin()} />
                {passwordFlag && <span className={styles.spanError}>Недопустимый пароль</span>}
                <input className={passwordFlag ? styles.input + " " + styles.notValid : styles.input}
                       onBlur={() => checkValidatePassword()}  value={password} type="password"
                       onChange={event => controlPassword(event)}
                       placeholder="Enter password"/>
                <input className={styles.btn} type='submit' value="Войти" disabled={buttonValue}
                       onClick={clickLocalStorageData}/>
            </div>
        </form>
    );
};

export default Login;