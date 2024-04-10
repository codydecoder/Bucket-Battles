import React from 'react'
import GitHubProfile from './GitHubProfile'
import GitHubProject from './GitHubProject'

export default function Footer () {
    
    return (
        <footer className='footer-container'>
            <h1>footer</h1>
            <GitHubProfile/>
            <GitHubProject/>
        </footer>
    )
}


