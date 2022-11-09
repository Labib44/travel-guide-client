import Main from "../../layout/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Blog from "../../Pages/Blog/Blog";
import Details from "../../Pages/Details/Details";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Review from "../../Pages/Review/Review";

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
                path: '/details/:id', element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            { path: '/review', element: <Review></Review> },

        ]
    },
    { path: '/*', element: <Error></Error> },
]);


export default router;