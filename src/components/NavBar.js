import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

import './NavBar.scss'

function NavBar() {
const[click, setClick] = useState(false)
const handleClick = () => setClick(!click)


  return (
    <div className='header'>
    
        <Link to='/'><h1>LOGO</h1></Link>
        <div className={click ? 'navMenu active' : 'navMenu'}>
        <div className='navItem'>
            <Link to='/'>Home</Link>
            <div className='dotContainer'>
            <div className='dot'></div>
            </div>
          </div>
          <div className='navItem'>
            <Link to='/'>About</Link>
            <div className='dotContainer'>
            <div className='dot'></div>
            </div>
          </div>
          <div className='navItem'>
            <Link to='/'>Services</Link>
            <div className='dotContainer'>
            <div className='dot'></div>
            </div>
          </div>
          <div className='navItem'>
            <Link to='/'>Contact</Link>
            <div className='dotContainer'>
            <div className='dot'></div>
            </div>
          </div>

          </div>
          <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes/>) : (<FaBars />)}

          </div>
    </div>
  )
}

export default NavBar