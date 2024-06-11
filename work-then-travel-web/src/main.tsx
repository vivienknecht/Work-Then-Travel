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
import AddAgency from './components/add-agency-page';
import TermsAndConditions from './components/terms-and-conditions';
import PrivacyAndPolicy from './components/privacy-and-policy';
import GDPR from './components/gdpr';

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
    path: "/agency/:name",
    element: <AgencyPage />
  },
  {
    path: "/add-agency",
    element: <AddAgency />
  },
  {
    path: "/terms-and-conditions",
    element: <TermsAndConditions />
  },
  {
    path: "/privacy-and-policy",
    element: <PrivacyAndPolicy />
  },
  {
    path: "/gdpr",
    element: <GDPR />
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
