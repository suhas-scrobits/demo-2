/**
 * uncomment only if wanted to use older way of routing
 * delete if using new way
 */
// import { Route, Routes } from "react-router-dom";

import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Admin from "../pages/admin/Admin";
import User from "../pages/user/User";
import Dashboard from "../components/dashboard/Dashboard";
import AddEmail from "../pages/verifyOtp/AddEmail";
import OtpScreen from "../pages/verifyOtp/OtpScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


/**
 * React Router 6.4 Version
 * Docs: https://reactrouter.com/en/main/start/tutorial
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path:"/UserLogin",
    element: <User />,
  },
  {
    path:"/AdminLogin",
    element: <Admin />,
  },
  {
    path:"/Dashboard",
    element: <Dashboard/>

  },
  {
    path:"/emailOtp",
    element: <AddEmail/>
  },
  {
    path:"/enterOTP",
    element: <OtpScreen/>
  }
  
]);

function RouteConfig() {
  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}

/**
 * Delete following code if using newer way
 *
 */

// function RouteConfig() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// }

export default RouteConfig;
