import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white shadow rounded-lg transition-shadow duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4 md:mb-0">
        <img
          className="w-40 h-50 object-cover rounded-lg"
          src={item.image}
          alt="product"
        />
        <div className="ml-4">
          <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
          <p className="text-sm text-gray-600 mt-1 md:text-base">
            {item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </p>
        </div>
      </div>
      <div className="flex items-center md:ml-4">
        <p className="text-lg font-semibold text-gray-800">${item.price.toFixed(2)}</p>
        <div
          onClick={removeFromCart}
          className="cursor-pointer ml-4 md:ml-6 p-2 bg-red-100 rounded-full hover:bg-red-200 text-red-900 transition-colors duration-300"
        >
          <MdDelete className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
