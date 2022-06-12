import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

//styles
import styles from "./App.css";

//Context
import ProductsContextProvider from "./Context/ProductsContextProvider";
import CardContextProvider from "./Context/CardContextProvider";

//Components
import Navbar from "./shared/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import ShopCart from "./components/ShopCart";

function App() {
  return (
    <ProductsContextProvider>
      <CardContextProvider>
        <div className={styles.App}>
          <Navbar />
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/*" element={<Navigate to="/products" />} />
            <Route path="/cart" element={<ShopCart />} />
          </Routes>
          <Footer />
        </div>
      </CardContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
