import {
    createBrowserRouter,
    Outlet,
    RouterProvider,

  } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Myacc from "./pages/Myacc";
import "./style.scss" ;
import Ourprod from "./pages/Ourprod";
import Cart from "./pages/Cart";
import Annoucement from "./components/Annoucement";

const Layout = () => 
{
    return(
        <>
        <Annoucement/>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
       { 
            path:"/",
            element : <Home/>,
        },
        { 
            path:"/Home",
            element : <Home/>,
        },
        { 
            path:"/Ourprod",
            element : <Ourprod/>,
        },
        {
            path:"/Myacc",
            element:<Myacc/>,
        },
        {
            path:"/Cart",
            element:<Cart/>,
        }

      ]

    },
    {
        path: "/Register",
        element: <Register/>,
    },
    {
        path: "/Login",
        element: <Login/>,
    },
   
  ]);




const  App = () => {
  return (
    <div className="app">
        <div className="container">
        <RouterProvider router={router}/>
        </div>
    </div>
  )
}




export default App
