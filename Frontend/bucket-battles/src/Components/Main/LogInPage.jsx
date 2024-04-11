import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    onLogin(username, password)
    navigate('/')
  }

  const handleLogout = () => {
    onLogout()
    navigate('/login')
  }

  return (
    <div className="">
      <div className=''>Login Page</div>
      <form className='' onSubmit={handleSubmit}>
        <input
          className=''
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className=''
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className='' type="submit">Login Now</button>
      </form>
      <button className='' onClick={handleLogout}>Logout</button>
      <button className='' onClick={() => navigate('/createAccount')}>Create Account</button>
    </div>
  )
}

export default LoginPage