import React, { useEffect, useState } from 'react'
import style from './ScrollToTop.module.css'

export default function ScrollToTop() {

    const [hidden, sethidden] = useState(false)

    useEffect(() => {
      window.addEventListener('scroll',()=>{
        if(window.scrollY > 150){
            sethidden(true)
        }else{
            sethidden(false)
        }
      })
    }, [])
    

    const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

  return (
    <>
        {hidden && <div className={`${style.scroll}`} onClick={()=> scrollToTop()}>
                        <i className={`fa fa-chevron-up ${style.iconStyle}`}></i>
                </div>}
    </>
    
  )
}
