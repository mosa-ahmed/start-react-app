import React from 'react'
import style from './Footer.module.css'
import { Link } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

export default function Footer() {
  return (
    <div>
    <footer className='text-light text-center'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mg-5 mb-lg-0 my-3">
                    <h4 className={`${style.footerHeader} mb-4 fw-bold`}>LOCATION</h4>
                    <p className={`${style.footerHeader} mb-0`}>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="col-lg-4 mg-5 mb-lg-0 my-3">
                    <h4 className={`${style.footerHeader} mb-4 fw-bold`}>AROUND THE WEB</h4>
                    <div className="social-icons">
                      <Link to='' className="text-decoration-none mx-1"><i className={`fab fa-facebook-f rounded-circle ${style.icon} d-inline-flex justify-content-center align-items-center`}></i></Link>
                      <Link to='' className=" text-decoration-none mx-1"><i className={`fab fa-twitter rounded-circle ${style.icon} d-inline-flex justify-content-center align-items-center`}></i></Link>
                      <Link to='' className="text-decoration-none mx-1"><i className={`fab fa-linkedin-in rounded-circle ${style.icon} d-inline-flex justify-content-center align-items-center`}></i></Link>
                      <Link to='' className=" text-decoration-none mx-1"><i className={`fab fa-dribbble rounded-circle ${style.icon} d-inline-flex justify-content-center align-items-center`}></i></Link>
                    </div>
                </div>
                <div className="col-lg-4 mg-5 mb-lg-0 my-3">
                <h4 className={`${style.footerHeader} mb-4 fw-bold`}>ABOUT FREELANCER</h4>
                <p className={`${style.content} mb-0 px-xxl-5 px-md-0`}>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                </div>
            </div>
            <ScrollToTop/>
        </div>
    </footer>
            <div className={style.copyRight}>
            <div className="container">
              <p className='p-4 mb-0 text-white text-center'>Copyright © Your Website 2021</p>
            </div>
          </div>
    </div>
  )
}
