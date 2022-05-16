import { Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import RecyclableProducts from "./Containers/RecyclableProducts/RecyclableProducts";
import Products from "./Containers/Products/Products";
import Product from "./Containers/Product/Product";
import Partenaires from "./Containers/Partenaires/Partenaires";
import Partenaire from "./Containers/Partenaire/Partenaire";
import NotFound from "./Containers/NotFound/NotFound";

import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/recyclableProducts" element={<RecyclableProducts />} />
        <Route path="/partenaires" element={<Partenaires />} />
        <Route path="/partenaire/:id" element={<Partenaire />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
