import {createBrowserRouter} from 'react-router-dom';
import Department from './features/departments';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{index: true, element: <Department />}],
  },
]);

export default router;
