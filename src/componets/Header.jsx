import React from 'react'
import logo from '../img/banner.jfif'

const Header = () => {
  return (
    <header className='banner'>
      <img className='col-8 logo mx-2 rounded mx-auto d-block' src={logo} alt='logo'/>
    </header>
  )
}

export default Header