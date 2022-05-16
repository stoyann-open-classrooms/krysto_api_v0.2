import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import logoKrysto from "../../logo_krysto.png";
export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoKrysto} alt="" />
      <Navbar />
    </header>
  );
}
