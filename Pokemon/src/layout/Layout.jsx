import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Layout({children}) {
  
  return (
    <>
        <div>{children}</div>
    </>

  )
}
