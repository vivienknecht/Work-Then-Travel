import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './index.css';
import HomePage from './components/home-page';
import Login from './components/login';
import Signup from './components/signup';

const router = createBrowserRouter([
{
path: "/",
element: <HomePage />
},
{
  path: "/login",
  element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router = { router}/>

  </React.StrictMode>,
)
