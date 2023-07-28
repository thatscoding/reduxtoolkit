import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart);

  return (
    <div>
      {" "}
      <div className="text-center text-2xl font-semibold text-red-600 mt-12">
        <h1>Your Cart ({products.length}) </h1>

        {products.map((product, index) => {
          return (
            <div>
              <div>
                <img
                  src={product.image}
                  className="w-20 h-20 object-contain"
                  alt=""
                />

                <h4>{product.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
