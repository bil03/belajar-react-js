import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ErrorPage from './pages/404'
import ProductsPage from './pages/products'
import ProfilePage from './pages/profile'
import DetailProductPage from './pages/detailproduct'
import { Provider } from 'react-redux'
import store from './redux/store'
import NavBar from './components/Layout/NavBar'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello World</div>,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/product/:id',
    element: <DetailProductPage />, 
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <NavBar />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
