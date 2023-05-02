import React from 'react'
import { Link } from 'react-router-dom'

import Logo from "../../asset/img/Logo.png"

import './Navbar.css'

export default function Navbar() {
  return (

    <nav>

        <Link to="/">
            <img alt="Logo" className="nav-logo" src={Logo} />  
        </Link>
        
        <div className="nav-links-title">
            <h1 className="nav-title">HRnet</h1>
            <div className="nav-links">
                <Link className="nav-link" to="/create">
                    <span>Create a new employee</span>
                </Link>
                <Link className="nav-link" to="/list">
                    <span>View current employee(s)</span>
                </Link>
            </div>
        </div>
    </nav>

  )
}
