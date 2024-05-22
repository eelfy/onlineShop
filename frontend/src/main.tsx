import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.module.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Main } from './pages/Main'
import { Routes } from './shared/routes'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: Routes.Main,
        element: <Main />
      },
      {
        path: Routes.Payments,
        element: <div>Payments</div>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
