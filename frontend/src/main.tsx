import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.module.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Main } from './pages/Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'main',
        element: <Main />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
