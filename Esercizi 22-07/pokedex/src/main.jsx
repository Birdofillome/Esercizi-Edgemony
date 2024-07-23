import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DefaultLayout from './components/DefaultLayout.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PokemonDetail from './pages/PokemonDetail.jsx'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [{
      path: '/',
      element: <App/>,
      },
      {
        path: "pokemons/:id",
        element: <PokemonDetail/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
