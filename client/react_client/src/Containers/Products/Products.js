import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Products.css";
export default function Products() {
  return (
    <div>
      <div className="products_searchBar">
        <label htmlFor="inp_product"> chercher un produit</label>
        <input type="text" id="inp_product" />
      </div>
      <div className="product_card_container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
