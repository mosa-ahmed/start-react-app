import React from 'react'
import style from './Style.module.css'

export default function Star() {
  return (
    <div className="header-content py-2 align-items-center d-flex justify-content-center w-100">
    <div className={`${style.line} me-3`}></div>
    <div className="star-icon text-white"><i className="fa fa-star fa-2x"></i></div>
    <div className={`${style.line} ms-3`}></div>
  </div>
  )
}
