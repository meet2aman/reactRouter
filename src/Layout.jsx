import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";
import { ThemeProvider } from "./context/theme";
import toast, { Toaster } from "react-hot-toast";

const Layout = () => {
  const [themeMode, setThemeMode] = React.useState("dark");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  React.useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <Toaster position="top-center" />
        <Header />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
