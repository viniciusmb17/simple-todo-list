import React from "react";
import todoLogo from '../assets/logo.svg';
import './Header.css';

export function Header(){
  return (
    <header>
      <img src={todoLogo} />
    </header>
  )
}