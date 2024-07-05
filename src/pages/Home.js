import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            console.log(data);
            setPosts(data);
        } catch (err) {
            console.log(err);
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            {loading ? (
                <Spinner />
            ) : posts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto">
                    {posts.map((post) => (
                        <Product key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <div className="text-center mt-8">
                    <h2 className="text-xl font-semibold text-gray-700">No products found</h2>
                </div>
            )}
        </div>
    );
}

export default Home;
