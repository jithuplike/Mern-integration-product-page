import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./src/components/Products";
import { createBrowserRouter } from "react-router-dom";
import AddProduct from "./addproduct/AddProduct";
 
function prod(){
    const route = createBrowserRouter([ 
        {
        path:"/",
        element:<Products/>,
        },
        {
            path:"/add",
            element:<AddProduct/>,
        },
    ]);
    return(
    <div className="prod">
       <RouterProvider router={route}></RouterProvider>
    </div>
    )
}

export default prod;