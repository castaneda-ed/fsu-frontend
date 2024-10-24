import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/root";
import Department from "./features/departments";
import FacultyList from "./features/FacultyList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Department /> },
      {
        path: "/faculty",
        element: <FacultyList />,
      },
    ],
  },
]);

export default router;
