import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Link, NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { orange, purple } from "@mui/material/colors";
import Nav from "../Navbar/Nav";
import MobileNav from "../Navbar/MobileNav";

const Header = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          {isMobile ? <MobileNav /> : <Nav />}

          {/* right side */}
          <div className="flex flex-wrap flex-row justify-center align-middle gap-4 max-md:hidden">
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
