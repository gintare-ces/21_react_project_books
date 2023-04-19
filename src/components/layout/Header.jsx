import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.scss'
import { useAuthCtx } from '../../store/AuthProvider';
import Logout from '../forms/Logout';

function Header() {
  const { isLoggedIn } = useAuthCtx();
  return (
    <header>
        <div className="container">
            <Link to={'/'} className='logo text-decoration-none text-white'>Logo</Link>
            <nav>
                <NavLink className='text-decoration-none text-white px-2' to={'/'}>Home page</NavLink>
                {isLoggedIn &&(
                 <>
                  <NavLink className='text-decoration-none text-white px-2' to={'/profile'}>Profile</NavLink>
                  </>
                )}
                {isLoggedIn &&(
                 <>
                  <NavLink className='text-decoration-none text-white px-2' to={'/posts'}>Posts</NavLink>
                  </>
                )}
                {isLoggedIn &&(
                 <>
                  <NavLink className='text-decoration-none text-white px-2' to={'/posts/add'}>Create Post</NavLink>
                  </>
                )}
                {!isLoggedIn && 
                  <NavLink className='text-decoration-none text-white px-2' to={'/login'}>Login</NavLink>
                }
                <Logout />
                
            </nav>
        </div>
    </header>
  )
}

export default Header