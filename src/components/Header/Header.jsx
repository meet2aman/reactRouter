import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Link, NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { orange, purple } from "@mui/material/colors";

const Header = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: orange[800],
    "&:hover": {
      backgroundColor: orange[600],
    },
  }));

  return (
    <>
      <header className="bg-black text-xl mx-10 mt-4 rounded-3xl tracking-wider max-md:mx-3 max-md:text-xm">
        <div className="flex flex-wrap align-middle justify-between gap-9 text-white py-4 px-8">
          <div className="text-orange-500 font-bold tracking-wider text-2xl">
            <Link to="/">Logo</Link>
          </div>
          <nav className="max-md:hidden">
            <ul className="flex flex-row gap-8 flex-wrap  justify-center align-middle">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-orange-600 transition-all ${
                    isActive ? "text-orange-700" : "text-gray-400"
                  }`
                }
              >
                <li>Home</li>
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-orange-600 transition-all ${
                    isActive ? "text-orange-700" : "text-gray-400"
                  }`
                }
              >
                <li>About</li>
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-orange-600 transition-all ${
                    isActive ? "text-orange-700" : "text-gray-400"
                  }`
                }
              >
                <li>Contact</li>
              </NavLink>

              <NavLink
                to="/github"
                className={({ isActive }) =>
                  `hover:text-orange-600 transition-all ${
                    isActive ? "text-orange-700" : "text-gray-400"
                  }`
                }
              >
                <li>Github</li>
              </NavLink>
            </ul>
          </nav>
          <div className="flex flex-wrap flex-row justify-center align-middle gap-4">
            <Link to="#">
              <div className="font-semibold hover:text-orange-600 max-md:hidden">
                Login
              </div>
            </Link>
            <div>
              <Link to="#">
                <ColorButton
                  size="small"
                  variant="contained"
                  className="hover:bg-orange-600"
                  endIcon={<SendIcon />}
                >
                  Get Start
                </ColorButton>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
