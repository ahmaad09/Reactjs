import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPages from './Pages/login.jsx';
import RegisterPages from './Pages/Register.jsx';
import ErrorPage from './Pages/404.jsx';
import ProductPage from './Pages/products.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPages />
  },
  {
    path: "/register",
    element: <RegisterPages />
  },
  {
    path: "/products",
    element: <ProductPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
