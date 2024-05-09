import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import MyBookings from "../pages/MyBookings/MyBookings";
import PrivateRoute from "./PrivateRoute";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/myBookings",
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
               
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:3000/services/${params.id}`)
            }
        ]
    }
])