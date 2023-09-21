import React from 'react'
import './pages.css'
import { Link } from 'react-router-dom'



export const LandingPage = () => {
  // fetch('http://localhost:3001/countries')

  return (
    <div className='landingDiv'>
      <Link to={'/home'} className='ticket' >
        <img src="./assets/handTicket.png" alt="ticket" />
      </Link>

      <Link to={'/home'} > 
        <button className='startButton'>Start Travel</button>
      </Link>
    </div>
  )
}
