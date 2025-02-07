"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { getCartItem, removeFromCart, updateCart } from "../actions/actions";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItem());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItem());
        Swal.fire("Removed!", "Item has been removed", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCart(id, quantity);
    setCartItems(getCartItem());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.discountPercent + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.discountPercent > 1) {
      handleQuantityChange(id, product.discountPercent - 1);
    }
  };

  const calculatedTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.discountPercent,
      0
    );
  };

  const router = useRouter();

  const handleProceedToCheckout = () => {
    Swal.fire({
      title: "Proceed to checkout",
      text: "Please review your cart before proceeding to checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed to checkout",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Thank you!", "Your order has been placed", "success");
        router.push("/checkout");
        setCartItems([]);
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-10">
      <h1 className="text-4xl font-extrabold text-center mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row items-center justify-between p-4 border-b border-gray-200"
            >
              <div className="flex items-center space-x-4">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    className="w-16 h-16 object-cover rounded"
                    alt="image"
                    width={500}
                    height={500}
                  />
                )}
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">Price: ${item.price}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 sm:space-y-0 space-y-4">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="px-3 py-1 bg-gray-300 text-black rounded-full hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.discountPercent}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="px-3 py-1 bg-gray-300 text-black rounded-full hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => handleRemove(item._id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 sm:ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-xl font-semibold mb-4 sm:mb-0">
            Total: ${calculatedTotal().toFixed(2)}
          </div>
          <button
            onClick={handleProceedToCheckout}
            className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
