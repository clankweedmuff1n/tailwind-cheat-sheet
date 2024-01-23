import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./Pages/MainPage.tsx";
import {NextUIProvider} from "@nextui-org/react";
import {AuthProvider} from "./context/AuthContext.tsx";
import BlogPage from "./Pages/BlogPage.tsx";
import ContactPage from "./Pages/ContactPage.tsx";
import AboutUsPage from "./Pages/AboutUstPage.tsx";
import AreasPage from "./Pages/AreasPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        /*element: new LazyLoad(lazy(() => import("./Test"))),*/
        element: <MainPage/>,
    },
    {
        path: "/areas",
        element: <AreasPage/>,
    },
    {
        path: "/blog",
        element: <BlogPage/>,
    },
    {
        path: "/contact",
        element: <ContactPage/>,
    },
    {
        path: "/about",
        element: <AboutUsPage/>,
    },
])

function App() {
    return (
        <>
            <AuthProvider>
                <NextUIProvider>
                    <RouterProvider router={router}/>
                </NextUIProvider>
            </AuthProvider>
        </>
    )
}

export default App
