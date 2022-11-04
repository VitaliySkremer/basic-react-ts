import './styles/App.css'
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Navbar} from "./Components/UI/Navbar/Navbar";
import {AppRouter} from "./Components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App
