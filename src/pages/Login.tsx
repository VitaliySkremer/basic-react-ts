import {MyInput} from "../Components/UI/input/MyInput";
import {MyButton} from "../Components/UI/button/MyButton";
import {FormEvent, useContext} from "react";
import {AuthContext} from "../Context/AuthContext";

export const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const login = (event: FormEvent)=>{
    event.preventDefault()
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  }
  return (
    <div>
      <h1>Авторизация</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
}