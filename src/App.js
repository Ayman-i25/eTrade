import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Products/Product";
import AllProducts from "./Pages/AllProducts/AllProducts";
import SignUp from "./Components/Auth/SignUp/SignUp";
import SignIn from "./Components/Auth/SignIn/SignIn";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Account from "./Pages/Account/Account";
import Orders from "./Pages/Account/Orders";
import OrderDetails from "./Pages/Account/OrderDetails";
import Addresses from "./Pages/Account/Addresses";
import AddressesEdit from "./Pages/Account/AddressesEdit";
import Wishlist from "./Pages/Wishlist/Wishlist";
import ProductIdContext from "./context/productIdContext";

function App() {
  return (
    <div className="App">
      <ProductIdContext>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<AllProducts />} />
            <Route path="/Products/:id" element={<Product />} />
            {/* Auth */}
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            {/* Other */}
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/account" element={<Account />}>
              <Route path="orders" element={<Orders />} />
              <Route path="order-detalis" element={<OrderDetails />} />
              <Route path="addresses" element={<Addresses />} />
              <Route path="addressesEdit" element={<AddressesEdit />} />
            </Route>
          </Routes>
      </ProductIdContext>
    </div>
  );
}

export default App;
