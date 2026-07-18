import { createBrowserRouter, RouterProvider } from 'react-router';
import App from '../App';
import Home from '../pages/Home';
import Stats from '../pages/Stats';
import Settings from '../pages/Settings';
import About from '../pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'stats', element: <Stats /> },
      { path: 'settings', element: <Settings /> },
      { path: 'about', element: <About /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
