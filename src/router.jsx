import { createBrowserRouter } from "react-router-dom";

import Root from "./layout/root";
import AuthForm from "./features/account/Authform";
import DepartmentList from "./features/departments/DepartmentList";
import DepartmentDetails from "./features/departments/DepartmentDetails";
import ProfessorList from "./features/faculty/ProfessorList";
import ProfessorDetails from "./features/faculty/ProfessorDetails";
import FacultyForm from "./features/faculty/FacultyForm";
import AddDepartment from "./features/departments/AddDepartment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <DepartmentList /> },
      { path: "/departments", element: <DepartmentList /> },
      { path: "/departments/:id", element: <DepartmentDetails /> },
      { path: "/login", element: <AuthForm /> },
      { path: "/faculty", element: <ProfessorList /> },
      { path: "/faculty/:id", element: <ProfessorDetails /> },
      { path: "/faculty/form", element: <FacultyForm /> },
      { path: "/departments/form", element: <AddDepartment /> },
    ],
  },
]);

export default router;
