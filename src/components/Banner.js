import React from 'react'

import {Link} from 'react-router-dom'

import './Banner.scss'

export const Banner = () => {
  return (
    <div className='hero'>

      <div className='content'>
        <h2>We Do Fences</h2>
        <h1>
        WE WILL BUILD YOUR DREAM
        </h1>
        <div className='lineBreak'>
          
        </div>
        <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
        <div>
        <Link to='/'><button className='btn'>Call Us Now</button></Link>
        <Link to='/'><button className='btn2'>About Us</button></Link>
        </div>
      </div>
      
      
    </div>
  )
}
