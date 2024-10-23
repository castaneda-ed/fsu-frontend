import {createBrowserRouter} from 'react-router-dom';
import Department from './features/departments';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{index: true, element: <Department />}, //may need to change
      { path: "/faculty/:id", element: <ProfessorDetails />},
    ],
  },
]);

export default router;
