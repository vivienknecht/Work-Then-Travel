import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './index.css';
import  MainScreen  from './components/homepage.tsx';
import StudentMainPage from './components/student-main-page.tsx';
import AgencyMainPage from './components/agency-home-page.tsx';
import StudentPage from './components/student-page.tsx';

const router = createBrowserRouter([{
path: "/",
element: <MainScreen />
},
{
  path: "/student-main-page",
  element: < StudentMainPage />
},
{
  path: "/student-page",
  element: < StudentPage />
},
{
  path: "/agency-main-page",
  element: < AgencyMainPage />
}
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router = { router}/>

  </React.StrictMode>,
)
