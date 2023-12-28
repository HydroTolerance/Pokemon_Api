import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Layout({children}) {
  return (
    <>
        <Header></Header>
        <Sidebar></Sidebar>
        <div>{children}</div>
        <div>
            <footer className="text-center text-lg-start">
                This is footer i just want to make a Practice example
            </footer>
        </div>
    </>

  )
}
