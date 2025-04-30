import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./components/Home";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Session from "./components/Session";
import Blog from "./pages/Blog"

const Layout = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/register", "/profile"]; 

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Outlet />
    </>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/", element: <Session /> },
      { path: "/blog", element: <Blog/> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/profile", element: <Profile /> },
      
    ],
  },
]);


function App() {
  return (
    
        <RouterProvider router={router} />
    
  );
}

export default App;
