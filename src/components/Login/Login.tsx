import React, {useEffect} from 'react';
import styles from'./Login.module.scss'
import {useAppDispatch} from "../../redux/hooks";
import {useSelector} from "react-redux";
import {
    changeButtonValue,
    changeLoginFlagValue,
    changeLoginValue,
    changePasswordFlagValue,
    changePasswordValue, fetchUserByImage,
    selectLog,
    setLocalStorageItem
} from "../../redux/slice/loginSLice";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        login,
        password,
        loginFlag,
        passwordFlag,
        buttonValue,
        headerImageFlag,
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
        if(loginFlag){
            setInterval(()=>{
                // dispatch(registerFlagToOff())
            },3000)
        }
        if(headerImageFlag) {
            dispatch(fetchUserByImage());
            navigate('/')
        }

    }, [login, password,loginFlag,headerImageFlag])


    return (
        <form>
            <div className={styles.wrapper}>
                {/*{registerFlag && <div style={{padding:"2rem",backgroundColor:"green"}}>регистрация успешна</div>}*/}
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
                <input className={styles.btn} type='submit' value="Войти" disabled={buttonValue}  onClick={clickLocalStorageData}/>
            </div>
        </form>
    );
};

export default Login;