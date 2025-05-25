import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Katalog from "./pages/Katalog";
import { ContextValue } from "./context/Context";
import Product from "./pages/products/Product";
export default function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <React.Fragment>
      <ContextValue.Provider value={{ setSearchValue, searchValue }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/product" element={<Product/> } />
        </Routes>
        <Footer />
      </ContextValue.Provider>
    </React.Fragment>
  );
}
