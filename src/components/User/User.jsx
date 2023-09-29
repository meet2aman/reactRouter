import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <>
      <div>
        <div className="rounded-3xl mx-10 bg-black my-4">
          <div className="text-4xl text-center text-gray-800 p-8">
            User Id <span className="text-lime-400">:</span> {userId}
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
