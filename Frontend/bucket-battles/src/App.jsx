import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import React, { useState } from 'react'
import { BASE_URL } from './global'
import PickList from './Components/Main/PickList'
import GameList from './Components/Main/GameList'
import LogInPage from './Components/Main/LogInPage'
import CreateAccount from './Components/Main/CreateAccount'
import axios from 'axios'


function App() {
    const [user, setUser] = useState(null)

    const handleLogin = async (username) => {
      try {
        const response = await axios.get(`${BASE_URL}/users/${username}`)
        console.log(response)
        const userData = response.data
        setUser(userData)
        console.log(userData)
      } catch (error) {
        console.error('Error fetching user data:', error.message)
      }
    }

    const handleLogout = () => {
      setUser(null)
    }

    const isAuthenticated = !!user


  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={ isAuthenticated ? <Main user={user} onLogout={handleLogout}/> : <Navigate replace to="/login"/>}/>
        <Route path="/login" element={ isAuthenticated ? <Navigate replace to="/"/> : <LogInPage onLogin={handleLogin}/>}/>
        <Route path="/createAccount" element={<CreateAccount onSubmit={() => {}}/>}/>
        <Route path="/account" element={isAuthenticated ? <Account userData={user} /> : <Navigate replace to="/login"/>} /> 
        <Route path="/games" element={<GameList/>}/>
        <Route path="/picks" element={<Main><PickList/></Main>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
