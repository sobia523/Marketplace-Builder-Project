'use client';

import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/products'
import { getCartItem } from '../actions/actions'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { CgChevronRight} from 'react-icons/cg'
import { client } from '@/sanity/lib/client';
import Swal from 'sweetalert2';

const Checkout = () => {

    const [cartItems, setCartItems] = useState<Product[]>([])
    const [discount, setDiscount] =  useState<number>(0)
    const [formValues, setFromValues] = useState({
        firstName: "",
        lastName: "", 
        email: "",
        phone: "",
        address: "",
        zipCode: "",
        city: "",
    })

    const [formError, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        address: false,
        zipCode: false,
        city: false,
    })

    useEffect(() => {
        setCartItems(getCartItem())
        const appliedDiscount = localStorage.getItem("appliedDiscount")
        if(appliedDiscount) {
            setDiscount(Number(appliedDiscount))
        }
    }, [])

    const subTotal = cartItems.reduce(
        (total, item) => total + item.price * item.discountPercent, 0)
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setFromValues({
                ...formValues,
                [e.target.id]: e.target.value
            })
        }

        const validateForm = () => {
            const errors = {
                firstName: !formValues.firstName,
                lastName: !formValues.lastName,
                email: !formValues.email,
                phone: !formValues.phone,
                address: !formValues.address,
                zipCode: !formValues.zipCode,
                city: !formValues.city,

            };
            setFormErrors(errors);
            return Object.values(errors).every((error) => !error);
        };


         const handleFormSubmit = async () => {
            Swal.fire({
              title: "Proceessing your order...",
              text: "Please wait a moment.",
              icon: "info",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Proceed",
            }).then((result) => {
              if (result.isConfirmed) {
                if(validateForm()){
                    localStorage.removeItem("appliedDiscount");
                }
                Swal.fire(
                    "Success!",
                    "Your order has been successfully processed!",
                    "success"
                );
              }else {
                Swal.fire(
                    "Error!",
                    "Please fill in all the fields before proceeding.",
                    "error"
                );
              }
            }
            
         );

        
        
            const orderData = {
                _type: "order",
                firstName: formValues.firstName,
                lastName: formValues.lastName,
                email: formValues.email,
                address: formValues.address,
                city: formValues.city,
                zipCode: formValues.zipCode,
                phone: formValues.phone,
                orderItems : cartItems.map((item) => ({
                    _type: "reference",
                    _ref: item._id
                })),
                total: subTotal,
                discount: discount,
                orderDate: new Date().toISOString(),
            };
            try {
                await client.create(orderData)
                localStorage.removeItem("appliedDiscount")
            } catch (error) {
                console.error("Failed to place order", error)
            }
        }

  return (
    <div className="min-h-screen bg-gray-50">
    <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 py-4">
                <Link href={"/carts"} className="text-[#666666] hover:text-[#000000] transition text-sm">
                    Cart
                </Link>
                <CgChevronRight />
                <span>Checkout</span>
            </nav>
        </div>
    </div>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white border rounded-lg p-6 space-y-6">
                <h2 className="text-lg font-extrabold mb-4">Order Summary</h2>
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div key={item._id} className="flex items-center gap-4 py-3 border-b">
                            <div className="w-16 h-16 rounded overflow-hidden">
                                {item.image && (
                                    <Image
                                        src={urlFor(item.image).url()}
                                        alt="image"
                                        width={100}
                                        height={100}
                                        className="object-cover w-full h-full"
                                    />
                                )}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm font-semibold">{item.name}</h3>
                                <p className="text-xs text-gray-500">Quantity: {item.discountPercent}</p>
                                <p>${item.price * item.discountPercent}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-xs font-medium">No items in cart</p>
                )}
                <div className="text-right pt-4">
                    <p className="text-sm">
                        SubTotal: <span className="font-medium">${subTotal}</span>
                    </p>
                    <p className="text-sm">
                        Discount: <span>${discount}</span>
                    </p>
                    <p className="text-lg font-semibold">
                        Total: <span>${subTotal.toFixed(2)}</span>
                    </p>
                </div>
            </div>

            <div className="bg-white border rounded-lg p-6 space-y-6">
                <h2 className="text-lg font-extrabold mb-4">Billing Information</h2>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Enter Your First Name"
                            value={formValues.firstName}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {formError.firstName && (
                            <p className="text-xs text-red-500">First Name is required</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Enter Your Last Name"
                            value={formValues.lastName}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {formError.lastName && (
                            <p className="text-xs text-red-500">Last Name is required</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                            type="text"
                            id="address"
                            placeholder="Enter Your Address"
                            value={formValues.address}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {formError.address && (
                            <p className="text-xs text-red-500">Address is required</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Your Email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {formError.email && (
                            <p className="text-xs text-red-500">Email is required</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            placeholder="Enter Your Phone"
                            value={formValues.phone}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {formError.phone && (
                            <p className="text-xs text-red-500">Phone is required</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
                        <input
                            type="text"
                            id="zipCode"
                            placeholder="Enter Your Zip Code"
                            value={formValues.zipCode}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {formError.zipCode && (
                            <p className="text-xs text-red-500">Zip Code is required</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                        <input
                            type="text"
                            id="city"
                            placeholder="Enter Your City"
                            value={formValues.city}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {formError.city && (
                            <p className="text-xs text-red-500">City is required</p>
                        )}
                    </div>

                    <div className="text-right">
                        <button
                            onClick={handleFormSubmit}
                            className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  );
};

export default Checkout












