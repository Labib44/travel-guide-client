import Main from "../../layout/Main";
import AddService from "../../Pages/AddService/AddService";
import AllServices from "../../Pages/AllServices/AllServices";
import Blog from "../../Pages/Blog/Blog";
import Details from "../../Pages/Details/Details";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Register from "../../Pages/Register/Register";
import Review from "../../Pages/Review/Review";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/allServicess', element: <AllServices></AllServices> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            {
                path: '/details/:id', element:<PrivateRoutes><Details></Details></PrivateRoutes> ,
                loader: ({ params }) => fetch(`https://travel-guide-server-woad.vercel.app/services/${params.id}`)
            },
            { path: '/review/:id', element: <Review></Review>,
            loader: ({ params }) => fetch(`https://travel-guide-server-woad.vercel.app/services/${params.id}`)
         },
            { path: '/addservice', element:<AddService></AddService> },
            { path: '/myreviews', element: <MyReviews></MyReviews> },

        ]
    },
    { path: '/*', element: <Error></Error> },
]);


export default router;