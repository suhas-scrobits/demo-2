/**
 * uncomment only if wanted to use older way of routing
 * delete if using new way
 */
// import { Route, Routes } from "react-router-dom";

import About from "../pages/about/About";

import Home from "../pages/home/Home";
import Admin from "../pages/admin/Admin";
import User from "../pages/user/User";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import SetPassword from "../pages/setPassword/SetPassword";

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
    path: "/UserLogin",
    element: <User />,
  },
  {
    path: "/AdminLogin",
    element: <Admin />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/:email/:token",
    element: <SetPassword />,
  },
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
