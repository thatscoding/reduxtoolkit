import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<h1>No page </h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
