import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import SignUp from "../components/pages/SignUp/SignUp";
import CheckOut from "../components/pages/CheckOut/CheckOut";
import Bookings from "../components/pages/Bookings/Bookings";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>, 
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: 'checkout/:id',
          element: <CheckOut></CheckOut>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/bookings',
          element: <Bookings></Bookings>,
        }
      ]
    },
  ]);

  export default router;