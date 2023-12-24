import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    
    <div className="text-center text-2xl text-cyan-700">
        <div>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
        </div>
        Header: This is a practice only i want to make this changes to make some significantly goodshit
    </div>
  )
}
