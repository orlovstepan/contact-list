import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Favourites from './Components/Favourites'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:'/favourite',
    element: <Favourites/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
   <RouterProvider router={router} // <App /> 
   />
      </Provider>
  </React.StrictMode>
)
