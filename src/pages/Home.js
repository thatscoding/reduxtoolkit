import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <div className="text-center text-2xl font-semibold text-red-600 mt-12">
        <h1>Welcome to My E- commerce store </h1>
      </div>
      <Products />
    </>
  );
};

export default Home;
