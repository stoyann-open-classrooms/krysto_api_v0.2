import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="header__nav">
      <Link to="/">Accueil</Link>
      <Link to="/products">Produits</Link>
      <Link to="/recyclableProducts">produits recyclé</Link>
      <Link to="/partenaires">partenaires</Link>
    </nav>
  );
}
