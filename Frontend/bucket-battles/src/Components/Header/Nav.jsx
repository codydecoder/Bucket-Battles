import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {

    return (
        <nav className='navbar'>
            <h1>nav</h1>
            <Link className="nav-links" to="/account">Account</Link>
            <Link className="nav-links" to="/games">Games</Link>
            <Link className="nav-links" to="/picks">Picks</Link>
            <Link className="nav-links" to="/buckets">Buckets</Link>
        </nav>
    )
}