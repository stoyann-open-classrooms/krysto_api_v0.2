import React from "react";
import { useState, useEffect } from "react";
import "./ProductCard.css";

export default function ProductCard() {
  const [dataProduct, setDataProduct] = useState();

  useEffect(() => {
    fetch("http://localhost:8001/krysto/api/products/allProducts")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => setDataProduct(data));
  }, []);
  console.log(dataProduct);

  return (
    <div className="product_card">
      <h2 className="product_card_title">nom du produit</h2>
      <div className="product_card_containerImg"></div>
      <div className="product_card_btns">
        <button className="btn_productCard">details</button>
        <button className="btn_productCard">editer</button>
        <button className="btn_productCard">supprimer</button>
      </div>
    </div>
  );
}
