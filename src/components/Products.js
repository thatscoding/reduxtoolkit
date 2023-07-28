import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/CartSlice";

function Products() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      console.log(data);
    };
    fetchProduct();
  }, []);

  return (
    <section>
      <h2 className="text-xl text-center py-2 mb-8">Latest Products</h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((product, index) => {
          return (
            <div
              key={index}
              className="w-[250px] h-[300px] border shadow-lg rounded-lg"
            >
              <div className="flex justify-center items-center mt-4">
                <img
                  src={product.image}
                  className="w-28 h-28 object-contain "
                  alt=""
                />
              </div>
              <div className="p-4 ">
                <div className="flex justify-between gap-2">
                  <h3 className="font-base font-semibold truncate">
                    {product.title}
                  </h3>
                  <h3>${product.price}</h3>
                </div>
                <p className="line-clamp-2 text-sm mt-2">
                  {product.description}
                </p>

                <div className="w-full flex mt-6 gap-4">
                  <button className="border px-6 h-8 text-base font-semibold border-green-600 rounded-lg shadow-lg flex justify-center items-center">
                    Buy
                  </button>
                  <button
                    className="border  px-4 h-8 text-base font-semibold text-white bg-green-600 rounded-lg shadow-lg flex justify-center items-center"
                    onClick={() => {
                      dispatch(addItem(product));
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Products;
