import "bootstrap/dist/css/bootstrap.min.css";
import "./css/my_reset.css";
import "./css/App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Company from "./pages/Company";
import Ceo from "./pages/Ceo";
import Organization from "./pages/Organization";
import Ci from "./pages/Ci";
import ShopAll from "./pages/ShopAll";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

import { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);

  const getProductList = async () => {
    //api를 호출하는 함수
    let url = `http://localhost:4000/products?category=new`;
    let response = await fetch(url);
    let data = await response.json();

    setProducts(data);
  };
  // useEffect(()=>{})
  // useEffect(()=>{},[])
  // useEffect(()=>{},[변수1, 변수2])
  // useEffect(()=>{return()=>{컨포넌트가 제가될 때 1차 실행 되는 곳}},[])
  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main products={products} />} />
        <Route path="/shopall" element={<ShopAll />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/company" element={<Company />}>
          <Route path="ceo" element={<Ceo />} />
          <Route path="organization" element={<Organization />} />
          <Route path="ci" element={<Ci />} />
        </Route>
        <Route path="*" element={<h1>페이지가 없습니다.</h1>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
