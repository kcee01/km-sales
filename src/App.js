
import Home from './pages/Home';

import Header from './components/Header';

import Cart from "./components/Cart";

import Item from "./components/Item";

import Login from "./pages/Login";

import{
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom"

import Footer from './components/Footer';

import { productsData } from './api/Api';

const Layout = () => {
  return(
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader: productsData,
      },
      {
        path:"/item/:id",
        element:<Item/>,
      },
      {
        path:"/Cart",
        element:<Cart/>,
      },
      {
        path:"/login",
        element:<Login/>,
      }
    ],
  }
])


function App() {



  return (
    <div className="font-bodyFont">
  

    <RouterProvider router={router}/>
  
      
    </div>
  );
}

export default App;
