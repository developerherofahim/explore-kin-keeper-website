import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import FriendDetails from "../pages/frienddetails/FriendDetails";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats";
import ErrorPage from "../pages/errorpage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: '/friendDetails/:friendId',
                Component: FriendDetails,
                loader: ()=> fetch('/data.json')
            },
            {
                path:'/timeline',
                Component: Timeline
            },
            {
                path:'/stats',
                Component: Stats
            }
        ],
        
        errorElement: <ErrorPage/>
    }
])