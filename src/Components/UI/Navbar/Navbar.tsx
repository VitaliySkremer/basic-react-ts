import {Link} from "react-router-dom";
import React, {useContext} from "react";
import {MyButton} from "../button/MyButton";
import {AuthContext} from "../../../Context/AuthContext";

export const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const handleClick = ()=>{
    setIsAuth(false)
    localStorage.removeItem('auth');
  }
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>

      {isAuth && <MyButton onClick={handleClick}>Выйти</MyButton>}
    </div>
  )
}