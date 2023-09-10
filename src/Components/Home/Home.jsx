import React from 'react'
import imgSrc from '../../assets/avataaars.svg'
import style from './Home.module.css'

export default function Home() {
  return (
    <header className={`text-center text-white ${style.bgHome} py-5`}>
      <div className="container d-flex flex-column align-items-center py-5">
        <img src={imgSrc} className={`mt-5 mb-5 ${style.homeImg} pt-5 pb-1`} alt="" />
        <h1 className={`mb-4 ${style.title}`}>START REACT</h1>
        <div className="header-content py-2 align-items-center d-flex justify-content-center w-100">
          <div className={`${style.line} me-3`}></div>
          <div className="star-icon"><i className="fa fa-star fa-2x"></i></div>
          <div className={`${style.line} ms-3`}></div>
        </div>
        <p className={`${style.paraghHome} mb-0 mt-3 pb-2`}>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </header>
  )
}
