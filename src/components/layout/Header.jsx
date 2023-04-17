import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.scss'

function Header() {
  return (
    <header>
        <div className="container">
            <Link to={'/'} className='logo'>Library</Link>
            <nav>
                <NavLink className='navItem' to={'/'}>Home page</NavLink>
                <NavLink className='navItem' to={'/books'}>Books</NavLink>
                <NavLink className='navItem' to={'/login'}>Login</NavLink>
                <NavLink className='navItem' to={'/register'}>Register</NavLink>
            </nav>
        </div>
    </header>
  )
}

export default Header