import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './index.css';
import HeaderComponent from './components/appbar';
import Footer from './components/footer';


const router = createBrowserRouter([{
path: "/",
element: <HeaderComponent />
},{
path: "/fot",
element: <Footer />
},
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router = { router}/>

  </React.StrictMode>,
)
