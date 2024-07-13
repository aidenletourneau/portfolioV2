import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './routes/error-page.jsx';
import ResumePage from './routes/resume-page.jsx'
import PortfolioPage from './routes/portfolio-page.jsx';
import AboutPage from './routes/about-page.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/resume',
        element: <ResumePage/>
      },
      {
        path: '/portfolio',
        element: <PortfolioPage/>
      },
      {
        index: true,
        element: <AboutPage/>
      },
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)

