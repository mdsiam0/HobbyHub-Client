import { createBrowserRouter } from "react-router";
import HomeLayout from "../pages/HomeLayout";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyGroup from "../Pages/MyGroup";
import CreateGroup from "../Pages/CreateGroup";
import PrivateRoute from "./PrivateRoute";
import GroupDetails from "../Pages/GroupDetails";
import UpdateGroup from "../pages/UpdateGroup";
import AllGroups from "../pages/AllGroups";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    index: true,
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "/all-groups",
                    loader: () => fetch('https://hobbyhub-server-lyart.vercel.app/groups'),
                    element: <AllGroups></AllGroups>
                },
                {
                    path: "/login",
                    element: <Login></Login>,
                },
                {
                    path: "/register",
                    element: <Register></Register>,
                },
                {
                    path: "create-group",
                    element: (
                        <PrivateRoute>
                            <CreateGroup></CreateGroup>
                        </PrivateRoute>
                    ),
                },
                {
                    path: "/groups/:id",
                    loader: ({ params }) => fetch(`https://hobbyhub-server-lyart.vercel.app/groups/${params.id}`),
                    element: (
                        <PrivateRoute>
                            <GroupDetails></GroupDetails>
                        </PrivateRoute>
                    ),
                },

                {
                    path: "my-groups",
                    element: (
                        <PrivateRoute>
                            <MyGroup></MyGroup>
                        </PrivateRoute>
                    ),
                },
                {
                    path: "/updateGroup/:id",
                    loader: ({ params }) =>
                        fetch(`https://hobbyhub-server-lyart.vercel.app/groups/${params.id}`),
                    element:  <PrivateRoute>
                            <UpdateGroup></UpdateGroup>
                        </PrivateRoute>
                    
                },
            ]
        },

    ]
);
export default router;