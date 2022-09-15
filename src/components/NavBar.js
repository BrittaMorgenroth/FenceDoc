import React from 'react'
import {Link} from 'react-router-dom'

import './NavBar.scss'

function NavBar() {
  return (
    <div className='header'>
    
        <Link to='/'><h1>LOGO</h1></Link>
        <div className='navMenu'>
        <div className='navItem'>
            <Link to='/'>Home long</Link>
            <div className='dotContainer'>
            <div className='dot'></div>
            </div>
          </div>
          <div className='navItem'>
            <Link to='/'>Home long very very long</Link>
            <div className='dotContainer'>
            <div className='dot'></div>
            </div>
          </div>
          <div className='navItem'>
            <Link to='/'>Home long</Link>
            <div className='dotContainer'>
            <div className='dot'></div>
            </div>
          </div>

          </div>
    </div>
  )
}

export default NavBar