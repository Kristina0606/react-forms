import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Layout } from './layout';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    HydrateFallback: () => (
      <div className="flex items-center justify-center h-screen">
        loading....
      </div>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
