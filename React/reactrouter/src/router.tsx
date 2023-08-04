import { createBrowserRouter } from "react-router-dom";
import Products from "./views/Products";
import Cart from "./views/Cart";
import AdminHome from "./views/admin/Admin";
import RootLayout from "./views/RootLayout";
import Home from "./views/Home";
import Product from "./views/Product";
import loadProduct from "./loaders/products";
import ProductBoundarie from "./error-boundaries/productBoudarie";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children:[{
            index: true,
            element: <Home/>
        },{
            path: 'products',
            element: <Products></Products>
        },{
            path: 'products/:productId',
            element: <Product/>,
            loader: loadProduct,
            errorElement: <ProductBoundarie></ProductBoundarie>
        },
        {
            path: "products",
            element: <Products/>
        },
        {
            path: "cart",
            element: <Cart/>
        },
    ]
    },
    {
        path: "/admin",
        element: <AdminHome/>
    }
])

export default router