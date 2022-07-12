import React, { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { H1 } from "@icon-park/react";

export default function Orders() {
  const [Orders, setOrders] = useState([]);
  useEffect(() => {
    const getorders = async () => {
      const resp = await fetch(`/api/myorder`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jwt: getCookie("auth_token") }),
      });
      const respData = await resp.json();
      setOrders(respData.orders);
    };
    getorders();
  }, []);
  console.log(Orders);

  //   var decoded = jsonwebtoken.verify(
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzg0N2ZhYTVmODU5MWVkMjg0YjQyMCIsImlhdCI6MTY1NzI5Mjk2MX0.suH1_Adiupuc2NcxbCY4aYhDh9LAxtWdHvfP5KncIWk",
  //     process.env.NEXT_PUBLIC_SECRET
  //   );

  return (
    <div className="max-w-5xl m-auto h-[60vh] items-center justify-center flex">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {Object.keys(Orders).length === 0 && (
          <div className="p-14 text-3xl">Sorry you dont have orders yet!</div>
        )}
        {Object.keys(Orders).length > 0 && (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Order Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {Orders.map((i) => {
                return (
                  <tr
                    key={i._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {i.phone}
                    </th>
                    <td className="px-6 py-4">{i.orderId}</td>
                    <td className="px-6 py-4">{i.email}</td>
                    <td className="px-6 py-4">${i.total}</td>
                    <td className="px-6 py-4 text-right">
                      <Link href={"/order?id=" + i._id}>
                        <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          Details
                        </a>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
