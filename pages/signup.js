import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import Link from "next/link";
import Image from "next//image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

export default function Signup({ auth, Verified }) {
  console.log(Verified);
  const [ep, setEp] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setEp({ ...ep, [e.target.name]: e.target.value });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    auth(ep, "signup");
  };

  return (
    <div>
      <Head>
        <title>Create your account now - aulia.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="this is website about the packaging."
        />
      </Head>
      <ToastContainer />
      <>
        {Verified === true && (
          <section className="w-full bg-white">
            <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
              <div className="flex w-full mx-auto text-left">
                <div className="relative inline-flex items-center mx-auto align-middle">
                  <div className="text-center">
                    <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                      Long headline to turn <br className="hidden lg:block" />
                      your visitors into users
                    </h1>
                    <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">
                      Free and Premium themes, UI Kits, templates and landing
                      pages built with Tailwind CSS, HTML &amp; Next.js.
                    </p>
                    <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                      <div className="mt-3 rounded-lg sm:mt-0">
                        <button className="items-center block px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          Get bundle
                        </button>
                      </div>
                      <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                        <button className="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                          See features
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {Verified === false && (
          <div className="bg-white ">
            <div className="text-center h-[65vh] w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
              <h2 className="text-3xl font-extrabold text-black  sm:text-4xl">
                <span className="block">Please Verify the Email</span>
                <span className="block text-indigo-500">
                  It&#x27;s today or never.
                </span>
              </h2>
              <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-12 inline-flex rounded-md shadow">
                  <button
                    type="button"
                    className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Verify
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {Verified === null && (
          <div className="flex flex-wrap w-full">
            <div className="flex flex-col w-full md:w-1/2">
              <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
                <a
                  href="#"
                  className="p-4 text-xl font-bold text-white bg-black"
                >
                  Aulia.
                </a>
              </div>
              <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                <p className="text-3xl text-center">Welcome.</p>
                <form
                  onSubmit={handleClick}
                  className="flex flex-col pt-3 md:pt-8"
                >
                  <div className="flex flex-col pt-4">
                    <div className="flex relative ">
                      <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <BiUserCircle className="text-xl" />
                      </span>
                      <input
                        type="text"
                        id="design-login-name"
                        className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        name="name"
                        placeholder="Name"
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col pt-4">
                    <div className="flex relative ">
                      <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <svg
                          width="15"
                          height="15"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                        </svg>
                      </span>
                      <input
                        type="text"
                        id="design-login-email"
                        className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Email"
                        name="email"
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col pt-4 mb-12">
                    <div className="flex relative ">
                      <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <svg
                          width="15"
                          height="15"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                        </svg>
                      </span>
                      <input
                        type="password"
                        id="design-login-password"
                        className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Password"
                        name="password"
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
                  >
                    <span className="w-full">Submit</span>
                  </button>
                </form>
                <div className="pt-12 pb-12 text-center">
                  <p>
                    Already have an account?
                    <Link href={"/login"}>
                      <a className="font-semibold underline">Login here.</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2 shadow-2xl ">
              <div className="relative hidden object-cover w-full h-screen md:block">
                <Image
                  className=""
                  alt=""
                  layout="fill"
                  src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
}
