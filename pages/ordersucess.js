import React, { useEffect } from "react";

export default function Ordersucess() {
  const detail = async () => {
    const resp = await fetch("/api/pretransaction");
    const respData = await resp.json();
    console.log(respData);
  };
  useEffect(() => {
    detail();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-green-500 text-center">
        Order placed successfully
      </h1>
    </div>
  );
}
