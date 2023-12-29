import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {

  return (
    <aside className='fixed top-[-19] z-40 left-0 w-64 h-screen'>
      <div className='h-full bg-gray-50 border relative'>
        <ul className='absolute top-16 right-0 left-0 text-center'>
          <li><Link to="/Gen1"><div className='p-4 bg-slate-100 shadow-md  mx-3 rounded-lg mb-3'>Gen 1</div></Link></li>
          <li><Link to="/Gen2"><div className='p-4 bg-slate-100 shadow-md  mx-3 rounded-lg mb-3'>Gen 2</div></Link></li>
          <li><Link><div className='p-4 bg-slate-100 shadow-md  mx-3 rounded-lg mb-3'>Gen 3</div></Link></li>
          <li><Link><div className='p-4 bg-slate-100 shadow-md  mx-3 rounded-lg mb-3'>Gen 4</div></Link></li>
          <li><Link><div className='p-4 bg-slate-100 shadow-md  mx-3 rounded-lg mb-3'>Gen 5</div></Link></li>
          <li><Link><div className='p-4 bg-slate-100 shadow-md  mx-3 rounded-lg mb-3'>Gen 6</div></Link></li>
          <li><Link><div className='p-4 bg-slate-100 shadow-md  mx-3 rounded-lg mb-3'>Gen 7</div></Link></li>
          <li><Link><div className='p-4 bg-slate-100 shadow-md  mx-3 rounded-lg mb-3'>Gen 8</div></Link></li>
          <li><Link><div className='p-4 bg-slate-100 shadow-md  mx-3 rounded-lg mb-3'>Gen 9</div></Link></li>
        </ul>
      </div>
    </aside>
  )
}
