import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.module.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Main } from './pages/Main'
import { Error } from './pages/Error'
import { Routes } from './shared/routes'
import { Brand } from './pages/Brand'
import { SearchResults } from './pages/SearchResults'
import { Item } from './pages/Item'

// картошка добавить страницу ошибки

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: Routes.Main,
        element: <Main />
      },
      {
        path: Routes.Payments,
        element: <div>Payments</div>
      },
      {
        path: `${Routes.Brand}/:brandName`,
        element: <Brand />
      },
      {
        path: `${Routes.Search}/:text`,
        element: <SearchResults />
      },
      {
        path: `${Routes.Brand}/:brandName/:itemName`,
        element: <Item />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
