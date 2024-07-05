import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/Cartitem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="cart-container flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      {cart.length > 0 ? (
        <div className="cart-content flex flex-col md:flex-row"> {/* Use flex for responsive columns */}
          <div className="cart-products w-full md:w-2/3 p-6 border-b md:border-b-0 md:border-r border-gray-200">
            <div className="cart-items flex flex-col gap-6">
              {cart.map((item, index) => (
                <div
                  key={item.id}
                  className="cart-item flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="cart-item-details flex items-center">
                    <CartItem item={item} itemIndex={index} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-summary w-full md:w-1/3 p-6 flex flex-col justify-between bg-gray-50">
            <div className="mt-30 md:mt-0"> {/* Adjust margin for smaller screens */}
              <h4 className="text-green-600 capitalize md:uppercase font-bold ">Your Cart</h4>
              <h3 className="text-4xl font-semibold mb-4 text-green-600 md:uppercase font-bold">Summary</h3>
              <p className="mb-2 text-lg font-bold text-gray-500">
                Total items: <span className="font-bold text-black">{cart.length}</span>
              </p>
            </div>
            <div className="flex flex-col mt-auto"> {/* Maintains vertical order */}
              <p className="text-lg text-gray-500 font-bold">
                Total Amount: <span className="font-bold text-black">${totalAmount.toFixed(2)}</span>
              </p>
              <button className="checkout-button w-full mt-4 px-6 py-3 bg-green-700 font-bold text-white rounded hover:bg-green-600 transition-all duration-300">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-empty flex flex-col justify-center items-center m-auto"> {/* Centered empty cart */}
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Cart Empty</h1>
          <Link to="/">
            <button className="shop-now-button px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition-all duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
