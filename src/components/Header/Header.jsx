import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Navbar/Nav";
import MobileNav from "../Navbar/MobileNav";
import ToggleSwitch from "../Toggle/Toggle";

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

  return (
    <>
      <header className="dark:bg-black bg-white text-xl mx-10 mt-4 rounded-3xl tracking-wider max-md:mx-3 max-md:text-xm">
        <div className="flex flex-wrap align-middle justify-between gap-9 text-white py-2 items-center px-8">
          {/* left Side */}
          <div className="text-orange-500 font-bold tracking-wider text-2xl">
            <Link to="/">Logo</Link>
          </div>
          <div className="max-md:hidden">
            {isMobile ? <MobileNav /> : <Nav />}
          </div>

          {/* right side */}
          {isMobile ? (
            <div className="flex flex-wrap flex-row justify-center align-middle items-center">
              <Link to="#">
                <div className="font-semibold hover:text-orange-600">
                  <MobileNav />
                </div>
              </Link>
              <div>
                <ToggleSwitch />
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap flex-row justify-center align-middle items-center gap-4 max-md:hidden">
              <Link to="#">
                <div className="font-semibold dark:text-gray-600 text-black hover:text-orange-600 max-md:hidden">
                  Login
                </div>
              </Link>
              <div>
                <ToggleSwitch />
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
