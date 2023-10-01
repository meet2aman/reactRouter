import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <>
      <div>
        <div className="rounded-xl mx-10 max-md:mx-4 dark:bg-black bg-white my-4">
          <div className="text-4xl text-center text-gray-800 p-8">
            User Id <span className="text-lime-400">:</span>{" "}
            <span className="text-orange-500">{userId}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
