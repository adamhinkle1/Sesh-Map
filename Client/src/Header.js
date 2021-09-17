import React from 'react'
import './Header.css'
import Navbar from './Navbar'

function Header() {
    return (
    <>
        <div className='header'>
                <Navbar className="header_menu" color="white"/>
        </div>
        <div className='header-spacing'></div>
    </>
    )
}

export default Header