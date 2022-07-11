import { useRouter } from "next/router";
import React, { useEffect } from "react";
import User from "../../models/User";
import mongoose, { mongo } from "mongoose";
import jwt from "jsonwebtoken";
import { getCookie } from "cookies-next";

const Token = ({ res }) => {
  const router = useRouter();
  // let token = router.query.token;
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 1500);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <section>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-col w-full mb-12 text-center">
            {res[0].success && (
              <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-green-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                {res[0].msg}
              </h1>
            )}
            {!res[0].success && (
              <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-red-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                {res[0].msg}
              </h1>
            )}
            <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-center text-gray-500">
              Free and Premium themes, UI Kits, templates and landing pages
              built with Tailwind CSS, HTML &amp; Next.js.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Token;

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO);
  }
  let response = [];
  try {
    var data = jwt.verify(context.query.token, process.env.NEXT_PUBLIC_SECRET);
  } catch (error) {
    response.push({
      success: false,
      msg: "User is not Verified successfully",
    });
  }

  if (data) {
    console.log(data);
    if (data.verified === false) {
      let updateUser = await User.findOneAndUpdate(
        { email: data.email },
        {
          verification: true,
        }
      );
      response.push({ success: true, msg: "User Verified successfully" });
    } else if (data.verified === true) {
      response.push({
        success: true,
        msg: "User Already Verified successfully",
      });
    } else {
      response.push({
        success: false,
        msg: "User is not Verified successfully",
      });
    }
  }
  // const resp = await fetch("http://localhost:3000/api/getproducts");
  // const products = await resp.json();
  return {
    props: { res: response }, // will be passed to the page component as props
  };
}
