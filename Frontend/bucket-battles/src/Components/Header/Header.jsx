import React from 'react'
import LogIn from './LogIn'
import Logo from './Logo'
import Nav from './Nav'

const Header = ({ user }) => {
    return (
        <header className='header-container'>
            <h1>Header</h1>
            <LogIn/>
            <Logo/>
            <Nav/>
        </header>
    )
}

export default Header 

