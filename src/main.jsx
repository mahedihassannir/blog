import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/router.jsx'
import ContexProvider from './Authentication/ContexProvider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-11/12 mx-auto'>


      <ContexProvider>

        <RouterProvider router={router}></RouterProvider>

      </ContexProvider>

    </div>
  </React.StrictMode>,
)
