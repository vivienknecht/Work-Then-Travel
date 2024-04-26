import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './index.css';
import HeaderComponent from './components/appbar';


const router = createBrowserRouter([{
path: "/",
element: <HeaderComponent />
},

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router = { router}/>

  </React.StrictMode>,
)
