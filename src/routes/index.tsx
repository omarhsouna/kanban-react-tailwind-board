import { RouteObject } from "react-router";
import Layout from "../components/layout";
import Boards from "../pages/Boards";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        children: [
          {
            path: "/boards",
            element: <Boards />,
          },
        ],
      },

      {
        path: "/",
        element: <p>Home Page</p>,
      },
    ],
  },
];

export default routes;
