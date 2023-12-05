import { useState } from 'react'
import Logo from './assets/bmw-logo.svg'
import viteLogo from '/vite.svg'
import './App.css'
import button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

function App() {

  return (
    <div>
      <div className='notRounded'>
        <a href="#" target="blank">
            <img className="logo" src={Logo} alt="company logo placeholder"></img>
        </a>
        <div className='rounded'>
          <p className='header'>You're almost there</p>
          <p>To confirm your email, simply go back to the browser window where you<br></br> started creating your Miro account and enter this code:</p>
          <div className='rounded-grey'></div>
          <p>Or make it even quicker by clicking the button below.</p>
          <div className='butt'>confirm your email</div>
          <p className='last'>If you didn't create an account in Miro, please ignore this message</p>
        </div>
        <p className='link'>this email was sent to <a href='#'>placeholder@email</a></p>
        <a href="#" target="blank">
          <img className="logo" src={Logo} alt="company logo placeholder"></img>
        </a>
        <p className='address'>Miro, 201 Spear St., Suite 1100</p>
        <p className='address'>San Francisco, CA 94105, United States</p>
        <a id='ink2' href="#">Help centre</a> <a id='ink2'href="#">Privacy Policy</a>
      </div>
    </div>
  )
}

export default App
