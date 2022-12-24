import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './routes/Root'
import Index from './routes/Index'
import Error from './routes/Error'

import { GlobalStyle } from './utils/style/GlobalStyle.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Index />,
          },
        ],
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
)
