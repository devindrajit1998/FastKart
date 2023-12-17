import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import Product from "./Product/Product";
import CheckOut from "./checkout/CheckOut";
import Dashboard from "./Admin/dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
