import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home} from './pages/Home';
import {createBrowserRouter} from 'react-router';
import {RouterProvider} from 'react-router/dom';
import {Product} from './pages/Product';
import {Layout} from './layouts/Layout';
import {PageNotFound} from './pages/PageNotFound';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/product/:id",
                element: <Product />,
            },
            {
                path: "*",
                element: <PageNotFound />,
            },
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);