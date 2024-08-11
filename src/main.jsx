import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Account from './pages/Account.jsx'
import Login from './pages/Login.jsx'
import ViewCart from './pages/ViewCart.jsx'
import ProfileInfo from './components/account/profile/ProfileInfo.jsx'
import ProfileAddress from './components/account/profile/ProfileAddress.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='' element={<Home/>} />
      <Route path='home' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />

      {/* Login Handle */}
      <Route path='account/login' element={<Login/>}/>
      <Route path='account' element={<Account/>}>
        <Route path='account' element={<ProfileInfo/>} />
        <Route path='addresses' element={<ProfileAddress/>} />
      </Route>
      <Route path='viewcart' element={<ViewCart/>} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
