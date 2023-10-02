import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div>
        <div className="mx-10 max-md:mx-4 my-4 rounded-xl dark:bg-black bg-white text-black dark:text-white">
          <div className="flex flex-col flex-wrap justify-center align-middle items-center p-8 gap-20">
            <div className="text-3xl max-md:text-2xl">
              Sorry You have Lost in Space :(
            </div>
            <Link to="/">
              <div>
                <button
                  type="submit"
                  className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-2 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                >
                  Go to Home
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
