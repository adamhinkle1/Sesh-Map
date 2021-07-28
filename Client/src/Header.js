import React from 'react'
import './Header.css'
import Navbar from './ServerNavbar'

function Header() {

    
    return (
        <div className='header'>
            <div className="header_right">
                <Navbar color="black"/>
            </div>
        </div>

    )
}

export default Header