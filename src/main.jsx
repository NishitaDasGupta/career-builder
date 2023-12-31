import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Main/Main';
import ErrorPage from './ErrorPage';
import Home from './Home/Home';
import Statistics from './Statistics/Statistics';
import Blog from './Blog';
import AppliedJobs from './AppliedJobs/AppliedJobs';
import JobDetails from './JobDetails/JobDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
children: [
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch('/jobData.json')
  },
  {
    path: "/job/:id",
    element: <JobDetails></JobDetails>
  },
  {
    path: "statistics",
    element: <Statistics></Statistics>,
  },
  {
    path: "blog",
    element: <Blog></Blog>,
    loader: ()=> fetch('blog.json')
  },
  {
    path: "appliedJobs",
    element: <AppliedJobs></AppliedJobs>,
    loader: () => fetch('/jobData.json')
  }
]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
