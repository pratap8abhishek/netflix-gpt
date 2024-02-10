import { createBrowserRouter } from "react-router-dom";
import Browes from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";

const Body = () =>{
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path:"/browes",
            element:<Browes />
        },
    ]);

    return(
    <div>
      <RouterProvider router={appRouter} />
    </div>
    )
}
export default Body;