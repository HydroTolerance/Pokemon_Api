import React, { useState } from "react";
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Layout({children}) {
  const [search, setSearch] = useState("");
  return (
    <>
        <div>{children}</div>
    </>

  )
}
