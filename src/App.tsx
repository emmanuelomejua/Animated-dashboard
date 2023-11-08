import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Product from './pages/products/Product';
import User from './pages/users/User';
import './styles/global.scss'

function App() {

  const Layout = () => {
    return(
      <section className='main'>
        <Navbar/>
        <section className='container'>
           <section className="menuContainer">
            <Menu/>
           </section>

           <section className='contentContainer'>
            <Outlet/>
           </section>
        </section>
        <Footer/>
      </section>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/products',
          element: <Product/>
        },
        {
          path: '/users',
          element: <User/>
        },
      ]
    },
    {
      path: '/signin',
      element: <Login/>
    }
  ])
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
