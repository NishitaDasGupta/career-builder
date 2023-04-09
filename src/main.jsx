import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Main/Main';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Statistics from './Statistics';
import Blog from './Blog';
import AppliedJobs from './AppliedJobs';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
children: [
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "statistics",
    element: <Statistics></Statistics>,
  },
  {
    path: "blog",
    element: <Blog></Blog>,
  },
  {
    path: "appliedJobs",
    element: <AppliedJobs></AppliedJobs>,
  }
]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
