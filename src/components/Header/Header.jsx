import React from 'react'
import "./Header.css"
function Header() {
  return (
    <>
        <header className='header'>
            <img 
                src= "./assets/troll-face.png"
                className='header--image' 
                alt='header--img'
            />
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='header--project'>React Course - Project 3</h4>
        </header>
    </>
  )
}

export default Header