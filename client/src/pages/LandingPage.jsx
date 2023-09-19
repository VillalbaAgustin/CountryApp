import React from 'react'
import './pages.css'
import { Link } from 'react-router-dom'



export const LandingPage = () => {
  // fetch('http://localhost:3001/countries')

  return (
    <div className='ticketDiv'>
      <Link to={'/home'}>
        <img src="./assets/handTicket.png" alt="ticket" className='ticket' />
      </Link>
    </div>
  )
}
