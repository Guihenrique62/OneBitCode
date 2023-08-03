import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import AdminHome from "./components/Admin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/products",
        element: <Products/>
    },
    {
        path: "/cart",
        element: <Cart/>
    },
    {
        path: "/admin",
        element: <AdminHome/>
    }
])

export default router