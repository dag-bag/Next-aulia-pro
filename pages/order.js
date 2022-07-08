import React, { useEffect } from "react";
import Image from "next/image";
import mongoose, { mongo } from "mongoose";
import Order from "../models/Order";

export default function MyOrder({ order }) {
  let products = order.products;
  console.log(order);
  let paytmresp = order.paymentInfo;
  let paytmInfo = JSON.parse(paytmresp);
  console.log(a);
  useEffect(() => {
    dataLayer.push({
      event: "purchase",
      ecommerce: {
        transaction_id: paytmInfo.BANKTXNID,
        value: paytmInfo.TXNAMOUNT,
        tax: 4.9,
        shipping: 0,
        currency: "INR",
        coupon: "SUMMER_SALE",
        items: [
          {
            item_id: "SKU_12345",
            item_name: "Stan and Friends Tee",

            coupon: "SUMMER_FUN",
            currency: "INR",
            discount: 0,
            index: 0,
            item_brand: "WEBKEEN",
            item_category: "Apparel",
            item_category2: "Adult",
            item_category3: "Shirts",
            item_category4: "Crew",
            item_category5: "Short sleeve",
            item_list_id: "related_products",
            item_list_name: "Related Products",
            item_variant: "green",
            location_id: "L_12345",
            price: 9.99,
            quantity: 1,
          },
          {
            item_id: "SKU_12346",
            item_name: "Google Grey Women's Tee",
            affiliation: "Google Merchandise Store",
            coupon: "SUMMER_FUN",
            currency: "USD",
            discount: 3.33,
            index: 1,
            item_brand: "Google",
            item_category: "Apparel",
            item_category2: "Adult",
            item_category3: "Shirts",
            item_category4: "Crew",
            item_category5: "Short sleeve",
            item_list_id: "related_products",
            item_list_name: "Related Products",
            item_variant: "gray",
            location_id: "L_12345",
            price: 20.99,
            promotion_id: "P_12345",
            promotion_name: "Summer Sale",
            quantity: 1,
          },
        ],
      },
    });
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                CODESWEAR.COM
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                ORDER-ID: {order.orderId}
              </h1>
              `
              <p className="leading-relaxed mb-4 text-lg text-green-600">
                Your order has been successfully placed.
              </p>
              `
              <div className="flex mb-4 text-center space-x-10">
                <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                  Description
                </a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Quantity
                </a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Total
                </a>
              </div>
              {Object.keys(products).map((i) => {
                return (
                  <div
                    key={products[i]._id}
                    className="flex border-t border-gray-200 py-2"
                  >
                    <div className="w-48">
                      <span className="text-gray-500">{products[i].name}</span>
                    </div>
                    <div className="flex justify-center items-center w-52">
                      <span className=" text-gray-900">{products[i].qty}</span>
                    </div>
                    <span className="ml-auto text-gray-900">
                      {products[i].price}
                    </span>
                  </div>
                );
              })}
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  SubTotal: ${order.total}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Track Order
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded relative">
              <Image
                alt="ecommerce"
                src="https://dummyimage.com/400x400"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO);
  }

  let order = await Order.findById(context.query.id);

  // const resp = await fetch("http://localhost:3000/api/getproducts");
  // const products = await resp.json();
  return {
    props: { order: JSON.parse(JSON.stringify(order)) }, // will be passed to the page component as props
  };
}
