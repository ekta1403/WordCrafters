import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./components/Home";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Session from "./components/Session";
import Blog from "./pages/Blog"
import Apppage from "./pages/Apppage"; 
import ProfilePage from "./pages/ProfilePage";

const Layout = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/register", "/profile", "/myprofile"]; 

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
      { path: "/connect", element: <Home /> },
      { path: "/", element: <Session /> },
      { path: "/blog", element: <Blog/> },
      { path: "/app", element: <Apppage/> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/profile", element: <Profile /> },
      { path: "/myprofile", element: <ProfilePage /> },
      
    ],
  },
]);


function App() {
  return (
    
        <RouterProvider router={router} />
    
  );
}

export default App;
