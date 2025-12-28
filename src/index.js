import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home} from './pages/Home';
import {createBrowserRouter} from 'react-router';
import {RouterProvider} from 'react-router/dom';
import {Product} from './pages/Product';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },

    {
        path: "/product/:id",
        element: <Product />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);