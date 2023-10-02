import { Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = React.useState("");
  let name = username;
  const notify = () => {
    if (name.length > 0) {
      toast.success(`Welcome ${name.toUpperCase()}`, {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#000",
          color: "#fff",
        },
      });
    } else {
      toast.error("Enter Your Name", {
        style: {
          borderRadius: "10px",
          background: "#000",
          color: "#fff",
        },
      });
    }
  };
  return (
    <div>
      <div className="mx-10 dark:bg-black bg-white dark:text-gray-700 text-black max-md:mx-4 rounded-xl my-4">
        <div className="flex dark:bg-black bg- flex-wrap flex-col rounded-xl text-center justify-center items-center p-8 max-md:p-4 gap-8">
          <div className="rounded-xl bg-white p-4 max-md:p-2 max-md:w-full w-1/2">
            <TextField
              type="text"
              autoComplete="current-password"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className=" text-white bg-white p-4"
              helperText="Please enter your name"
              color="warning"
              id="demo-helper-text-aligned"
              fullWidth
              label="Name"
            />
          </div>
          {name.length > 0 ? (
            <div>
              <Link to={`/user/${username}`} onClick={notify}>
                <Button className="bg-orange-600" variant="contained">
                  Login
                </Button>
              </Link>
            </div>
          ) : (
            <Link to="#" onClick={notify}>
              <button
                type="submit"
                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-2 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
              >
                Login
              </button>
              {/* <Button className="bg-orange-600" variant="contained">
                Login
              </Button> */}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
