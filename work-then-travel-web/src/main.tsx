import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './index.css';
import HomePage from './components/home-page';
import Login from './components/login';

const router = createBrowserRouter([
{
path: "/",
element: <HomePage />
},
{
  path: "/login",
  element: <Login />
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router = { router}/>

  </React.StrictMode>,
)
