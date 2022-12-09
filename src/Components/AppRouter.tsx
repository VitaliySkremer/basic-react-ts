import {Navigate, Route, Routes} from "react-router-dom";
import React, {useContext} from "react";
import {privateRoutes, publicRoutes} from "../Routes/routers";
import {AuthContext} from "../Context/AuthContext";
import {Loader} from "./UI/Loader/Loader";

export const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);
  if(isLoading) {
    return (
      <Loader/>
    )
  }
  return (
      isAuth
        ?<Routes>
          {privateRoutes.map((item, index)=>
            <Route path={item.path} element={<item.component/>} key={index}/>
          )}
          <Route path="*" element={<Navigate to="/posts" replace/>}/>
        </Routes>
        :
        <Routes>
          {publicRoutes.map((item, index)=>
            <Route path={item.path} element={<item.component/>} key={index}/>)}
          <Route path="*" element={<Navigate to="/login" replace/>}/>
        </Routes>

  )
}