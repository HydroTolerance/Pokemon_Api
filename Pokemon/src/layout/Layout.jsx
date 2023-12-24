import React from 'react'
import Header from '../components/Header'

export default function Layout({children}) {
  return (
    <>
        <Header></Header>
        <div>{children}</div>
        <div>
            <footer className="text-center text-lg-start">
                This is footer i just want to make a Practice example
            </footer>
        </div>
    </>

  )
}
