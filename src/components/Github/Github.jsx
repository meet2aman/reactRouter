import axios from "axios";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  return (
    <>
      <div>
        <div className="dark:bg-black bg-white rounded-xl mx-10 my-4  max-md:mx-4">
          <div className="flex flex-wrap justify-around items-center align-middle p-8  sm:text-2xl">
            <div className="rounded-xl">
              <img
                src={data.avatar_url}
                alt="github_picture"
                className="rounded-full scale-[0.7] shadow-xl shadow-black dark:shadow-xl dark:shadow-orange-700"
              />
            </div>
            <div className="text-2xl dark:text-white text-black text-center ">
              <p className="text-orange-600 mt-2 text-4xl sm:text-xxl">
                {data.name}
              </p>
              <Link to={data.html_url} target="blank">
                <p className="text-3xl text-orange-600 hover:text-orange-700 hover:underline">
                  Visit Github
                </p>
              </Link>

              <p>
                {" "}
                Github repositories <span className="text-lime-600">
                  {" "}
                  :
                </span>{" "}
                <span className="text-orange-500">{data.public_repos}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Github;

export const githubInfo = async () => {
  const response = await axios.get("https://api.github.com/users/meet2aman");
  return response.data;
};
