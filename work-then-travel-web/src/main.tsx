import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import HomePage from './components/home-page';
import Login from './components/login';
import Signup from './components/signup';
import AboutUs from './components/about-us-page';
import ContactUs from './components/contact-us-page';
import MyProfile from './components/my-profile';
import AgenciesPage from './components/agencies-page';
import AgencyPage from './components/agency-page';

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
  {
    path: "/about-us",
    element: <AboutUs />
  },
  {
    path: "/contact-us",
    element: <ContactUs />
  },
  {
    path: "/my-profile",
    element: <MyProfile />
  },
  {
    path: "/agencies",
    element: <AgenciesPage />
  },
  {
    path: "/agency",
    element: <AgencyPage />
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
