import React from 'react'
import logo from '../images/pngegg.png'

export default function Header() {
  return (
    
    <div className='header'>
        <img className='logo' src={logo} alt="meme logo"/>
        <h1 className='header__title'>Meme Generator</h1>
        <h2 className='header__text'>Choose your favorite meme!</h2>
    </div>

  )
}
