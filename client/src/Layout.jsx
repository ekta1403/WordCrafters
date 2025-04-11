
import Home from './components/Home'
import Navbar from './components/Navbar'
import {  Outlet } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'


function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}













// const Layout = () => {
//   return (
//         <div className="layout">
//           <Navbar/>
            
//             <Outlet/>
//         </div>
 
    
//   )
// }
 
// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout/>,
//     children : [
//       {
//         path : "/",
//         element : <Home/>
//       },
//       {
//         path : "/register",
//         element : <Register/>
//       },
//       {
//         path : "/login",
//         element : <Login />
//       }
//     ]
//   }
// ])
 
 
// function App() {
//   return (
//     <>
//       <div className="app">
//         <div className="container">
//           <RouterProvider router = {router}/>
//         </div>
//       </div>
 
//     </>
//   )
// }

export default Layout