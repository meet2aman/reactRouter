import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <div className=" dark:bg-black bg-white dark:text-white text-black rounded-xl mx-10 my-4 max-md:mx-4">
          <div className="flex flex-wrap justify-center gap-10 lg:gap-80 items-center p-8 align-middle md:gap-5">
            <div>
              <img
                className="w-96"
                src="https://i.ibb.co/5BCcDYB/Remote2.png"
                alt="image1"
              />
            </div>
            <div className="max-w-xl sm:mt-1 mt-10 space-y-8 text-center sm:text-center ">
              <h2 className="text-4xl font-bold sm:text-5xl">
                Download Now
                <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
              </h2>

              <Link
                className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-600 rounded-lg hover:opacity-75"
                to="/"
              >
                <svg
                  fill="white"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                &nbsp; Download now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" dark:bg-black bg-white text-black dark:text-white mx-10 my-4 rounded-xl max-md:mx-4">
          <div className="flex flex-wrap justify-center align-middle p-10 items-center lg:gap-80 gap-10 md:gap-5">
            <div>
              <img
                className="sm:w-96 w-48"
                src="https://i.ibb.co/2M7rtLk/Remote1.png"
                alt="image2"
              />
            </div>
            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
              Welcome Here !
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
