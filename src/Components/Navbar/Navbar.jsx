import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.module.css'
import $ from 'jquery'
import style from './Navbar.module.css'


export default function Navbar() {

    const [hideCollpse, setHideCollpse] = useState(false)

    function AddCollapse(){
        $('#navbarSupportedContent').removeClass('d-none')
    }

  return (
    <nav className={`navbar fixed-top navbar-expand-lg ${style.bgSec} navbar-dark fw-bolder p-lg-4 p-3`} >
    <div className="container px-lg-5 mx-lg-5">
      <Link to='' className={`navbar-brand ms-xl-5 fw-bolder ${style.navbarBrand}`} >START REACT</Link>
      <button className={`${style.navbarToggler} text-white fs-6 rounded`} onClick={()=> AddCollapse()}type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        MENU<Link className={`${style.anchor} ms-2 fa fa-bars`}></Link>
      </button>
      <div className={`collapse navbar-collapse ${hideCollpse?'d-none':''}`} id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-xl-5">
          
          <li className={`${style.navItem} py-2 me-2`}>
            <Link to='portfolio' className={`${style.navLink} text-white py-3 px-0 px-lg-3`} onClick={()=> {setHideCollpse(true)}}>PORTFOLIO</Link>
          </li>
          <li className={`${style.navItem} py-2 me-2`}>
            <Link to='about' className={`${style.navLink} text-white py-3 px-0 px-lg-3`} onClick={()=> setHideCollpse(false)} >ABOUT</Link>
          </li>
          <li className={`${style.navItem} py-2 me-2`}>
            <Link to='contact' className={`${style.navLink} text-white py-3 px-0 px-lg-3`} onClick={()=> setHideCollpse(true)}  >CONTACT</Link>
          </li>
         </ul>
      </div>
    </div>
  </nav>
  )
}
