import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  return (
    <div className='flex flex-col'>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Layout