import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './routes/error-page.jsx';
import Resume from './routes/resume-page.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/resume',
    element: <Resume/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

