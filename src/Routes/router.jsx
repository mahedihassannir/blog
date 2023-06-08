import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Video from "../Pages/Video";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },

                {
                    path: 'login',
                    element: <Login></Login>
                },
                {
                    path: 'Register',
                    element: <Register></Register>
                },
                {
                    path: 'Video',
                    element: <Video></Video>
                },

            ]
        }
    ]
)


export default router