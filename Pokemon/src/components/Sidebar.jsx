import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {

  return (
    <aside className='fixed top-[-19] z-40 left-0 w-64 h-screen'>
      <div className='h-full bg-gray-50 border relative'>
        <ul className='absolute top-16 right-0 left-0 text-center'>
          <li><Link to="/AllGen"><div className='p-4 bg-slate-100 shadow-md  mx-3 rounded-lg mb-3 hover:bg-red-400 hover:text-white hover:transition duration-300'>ALL GEN</div></Link></li>
          <li><Link to="/Gen1"><div className='p-4 bg-slate-100 shadow-md  mx-3 rounded-lg mb-3 hover:bg-red-400 hover:text-white hover:transition duration-300'>GEN 1</div></Link></li>
          <li><Link to="/Gen2"><div className='p-4 bg-slate-100 shadow-md  mx-3 rounded-lg mb-3 hover:bg-red-400 hover:text-white hover:transition duration-300'>GEN 2</div></Link></li>
          <li><Link to="/Gen3"><div className='p-4 bg-slate-100 shadow-md  mx-3 rounded-lg mb-3 hover:bg-red-400 hover:text-white hover:transition duration-300'>GEN 3</div></Link></li>
          <li><Link to="/Gen4"><div className='p-4 bg-slate-100 shadow-md  mx-3 rounded-lg mb-3 hover:bg-red-400 hover:text-white hover:transition duration-300'>GEN 4</div></Link></li>
          <li><Link to="/Gen5"><div className='p-4 bg-slate-100 shadow-md  mx-3 rounded-lg mb-3 hover:bg-red-400 hover:text-white hover:transition duration-300'>GEN 5</div></Link></li>
          <li><Link to="/Gen6"><div className='p-4 bg-slate-100 shadow-md  mx-3 rounded-lg mb-3 hover:bg-red-400 hover:text-white hover:transition duration-300'>GEN 6</div></Link></li>
          <li><Link to="/Gen7"><div className='p-4 bg-slate-100 shadow-md  mx-3 rounded-lg mb-3 hover:bg-red-400 hover:text-white hover:transition duration-300'>GEN 7</div></Link></li>
          <li><Link to="/Gen8"><div className='p-4 bg-slate-100 shadow-md  mx-3 rounded-lg mb-3 hover:bg-red-400 hover:text-white hover:transition duration-300'>GEN 8</div></Link></li>
          <li><Link to="/Gen9"><div className='p-4 bg-slate-100 shadow-md  mx-3 rounded-lg mb-3 hover:bg-red-400 hover:text-white hover:transition duration-300'>GEN 9</div></Link></li>
        </ul>
      </div>
    </aside>
  )
}
