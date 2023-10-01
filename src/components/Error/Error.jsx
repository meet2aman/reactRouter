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
                <Button className="bg-orange-600" variant="contained">
                  GO to Home
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
