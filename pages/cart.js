import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function CartPage({
  Cart,
  removeFromCart,
  addToCart,
  SubTotal,
}) {
  const items = Object.keys(Cart).length;

  const [Check, setCheck] = useState(true);

  return (
    <>
      <Head>
        <title>your cart - aulia.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="packaging website cart" />
      </Head>
      <div>
        <div className="bg-gray-100">
          <div className="container mx-auto mt-10">
            <div className="flex shadow-md my-10">
              <div className="w-3/4 bg-white px-10 py-10">
                <div className="flex justify-between border-b pb-8">
                  <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                  <h2 className="font-semibold text-2xl">3 Items</h2>
                </div>
                <div className="flex mt-10 mb-5">
                  <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                    Product Details
                  </h3>
                  <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                    Quantity
                  </h3>
                  <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                    Price
                  </h3>
                  <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                    Total
                  </h3>
                </div>
                <div className="Map">
                  {Object.keys(Cart).map((k) => {
                    return (
                      <div
                        className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                        key={k}
                      >
                        <div className="flex w-2/5">
                          {/* <!-- product --> */}
                          <div className="w-20 relative">
                            <Image
                              className="h-24 rounded-md"
                              src={`${Cart[k].img}`}
                              alt=""
                              width={80}
                              height={80}
                              layout="fixed"
                              objectFit="cover"
                            />
                          </div>
                          <div className="flex flex-col justify-between ml-4 flex-grow">
                            <span className="font-bold text-sm">
                              {Cart[k].name}
                            </span>
                            <span className="text-red-500 text-xs">Apple</span>
                            <span
                              onClick={() => {
                                removeFromCart(
                                  k,
                                  Cart[k].qty,
                                  Cart[k].name,
                                  Cart[k].price
                                );
                              }}
                              className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                            >
                              Remove
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-center w-1/5">
                          <svg
                            onClick={() => {
                              removeFromCart(
                                k,
                                1,
                                Cart[k].name,
                                Cart[k].price,
                                Cart[k]._id
                              );
                            }}
                            className="fill-current text-gray-600 w-3 cursor-pointer"
                            viewBox="0 0 448 512"
                          >
                            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                          </svg>

                          <span className="mx-2 border text-center w-8">
                            {Cart[k].qty}
                          </span>

                          <svg
                            onClick={() => {
                              addToCart(
                                k,
                                1,

                                Cart[k].name,
                                Cart[k].price,
                                products[k]._id
                              );
                            }}
                            className="fill-current text-gray-600 w-3 cursor-pointer"
                            viewBox="0 0 448 512"
                          >
                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                          </svg>
                        </div>
                        <span className="text-center w-1/5 font-semibold text-sm">
                          ${Cart[k].price}.00
                        </span>
                        <span className="text-center w-1/5 font-semibold text-sm">
                          ${Cart[k].price * Cart[k].qty}.00
                        </span>
                      </div>
                    );
                  })}
                </div>

                <a
                  href="#"
                  className="flex font-semibold text-indigo-600 text-sm mt-10"
                >
                  <svg
                    className="fill-current mr-2 text-indigo-600 w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Continue Shopping
                </a>
              </div>

              <div id="summary" className="w-1/4 px-8 py-10">
                <h1 className="font-semibold text-2xl border-b pb-8">
                  Order Summary
                </h1>
                <div className="flex justify-between mt-10 mb-5">
                  <span className="font-semibold text-sm uppercase">
                    Sub Total
                  </span>
                  <span className="font-semibold text-sm">${SubTotal}</span>
                </div>
                <div>
                  <label className="font-medium inline-block mb-3 text-sm uppercase">
                    Shipping
                  </label>
                  <select className="block p-2 text-gray-600 w-full text-sm">
                    <option>Free Shipping</option>
                  </select>
                  <p className="text-green-500 pt-4">
                    You are eligible for free shipping.
                  </p>
                </div>
                <div className="py-10">
                  <label
                    htmlFor="promo"
                    className="font-semibold inline-block mb-3 text-sm uppercase"
                  >
                    Promo Code
                  </label>
                  <input
                    type="text"
                    id="promo"
                    placeholder="Enter your code"
                    className="p-2 text-sm w-full"
                  />
                </div>
                <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                  Apply
                </button>
                <div className="border-t mt-8">
                  <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span>${SubTotal}</span>
                  </div>
                  <Link href="/checkout">
                    <div
                      onMouseEnter={() => {
                        if (SubTotal > 0) {
                          setCheck(false);
                        } else {
                          setCheck(true);
                        }
                      }}
                    >
                      <button
                        disabled={Check}
                        className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full disabled:bg-indigo-300"
                      >
                        Checkout
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
