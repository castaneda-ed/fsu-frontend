import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/root";
import Department from "./features/departments";
import FacultyList from "./features/FacultyList";
import Professors from "./features/ProfessorDetails";


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
      { path: "/faculty/:id", element: <Professors />},
    ],
  },
]);

export default router;
