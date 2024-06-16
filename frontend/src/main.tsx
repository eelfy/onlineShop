import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Main } from './pages/Main'
import { Error } from './pages/Error'
import { Routes } from './shared/routes'
import { Brand } from './pages/Brand'
import { SearchResults } from './pages/SearchResults'
import { ItemPage } from './pages/Item'
import { BagPage } from './pages/BagPage'
import { CategoryPage } from './pages/CategoryPage'
import { TermsPage } from './pages/TermsPage'
import { DeliveryPage } from './pages/DeliveryPage'
import { RefundPage } from './pages/RefundPage'

import './index.css'

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
        path: `${Routes.Brand}/:brandName`, // /brand/Nike
        element: <Brand />
      },
      {
        path: `${Routes.Category}/:categoryName`, // /category/Kaws.id
        element: <CategoryPage />
      },
      {
        path: `${Routes.Search}/:text`,
        element: <SearchResults />
      },
      {
        path: `${Routes.Product}/:productId`,
        element: <ItemPage />
      },
      {
        path: Routes.Bag,
        element: <BagPage />
      },
      {
        path: Routes.Terms,
        element: <TermsPage />
      },
      {
        path: Routes.Delivery,
        element: <DeliveryPage />
      },
      {
        path: Routes.Refund,
        element: <RefundPage />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
