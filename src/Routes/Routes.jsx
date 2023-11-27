import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import SearchResult from "../Pages/SearchResult/SearchResult";
import Explore from "../Pages/Explore/Explore";
import PageNotFound from "../Pages/404/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    
    element: <Main />,
    errorElement:<PageNotFound/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/:mediaType/:id", element: <Details /> },
      { path: "/search/:query", element: <SearchResult /> },
      { path: "/explore/:mediaType", element: <Explore /> },
    ],
  },
]);

export default router;
