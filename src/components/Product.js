import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to Cart");
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item removed from Cart");
    }

    return (
        <div className="bg-white shadow-2xl shadow-green-500/20 rounded-lg p-6 flex flex-col justify-between transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out w-70">
            <div className="mb-4">
                <p className="text-lg font-semibold">{post.title}</p>
            </div>
            <div className="mb-4">
                <p className="text-gray-600">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
            </div>
            <div className="mb-4 flex justify-center">
                <img src={post.image} alt="product" className="h-48 w-auto object-contain" />
            </div>
            <div className="flex justify-between items-center">
                <p className="text-lg text-green-600 font-bold">${post.price.toFixed(2)}</p>
                {
                    cart.some((p) => p.id === post.id) ? (
                        <button
                            onClick={removeFromCart}
                            className="bg-white text-black px-4 rounded-full hover:bg-black border-solid border-2 border-black hover:text-white transition-transform transform hover:scale-100 duration-300"
                        >
                            Remove Item
                        </button>
                    ) : (
                        <button
                            onClick={addToCart}
                            className="bg-white text-black px-4 rounded-full hover:bg-black border-solid border-2 border-black hover:text-white transition-transform transform hover:scale-100 duration-300"
                        >
                            Add to Cart
                        </button>
                    )
                }
            </div>
        </div>
    );
}

export default Product;
