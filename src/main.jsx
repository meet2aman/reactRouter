import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  HashRouter,
  BrowserRouter,
  createHashRouter,
} from "react-router-dom";
import { About, Contact, Github, Home, User, Error, Login } from "./components";
import { githubInfo } from "./components/Github/Github";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/github" element={<Github />} loader={githubInfo} />
      <Route path="user/:userId" element={<User />} />
      <Route path="*" element={<Error />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
