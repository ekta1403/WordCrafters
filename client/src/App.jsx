import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./components/Home";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Session from "./components/Session";
import Marketplace from "./components/Marketplace";
import Projects from "./components/Projects";


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
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/profile", element: <Profile /> },
      { path: "/marketplace", element: <Marketplace /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);


function App() {
  return (
    
        <RouterProvider router={router} />
    
  );
}

export default App;
