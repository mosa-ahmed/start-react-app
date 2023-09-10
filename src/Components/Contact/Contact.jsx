import React, {useState} from 'react'
import style from './Contact.module.css'
import Star from '../Star/Star.jsx'


export default function Contact() {
  const [name, setname] = useState(false)
  const [email, setemail] = useState(false)
  const [phone, setphone] = useState(false)
  const [message, setmessage] = useState(false)

  // DISABLED BUTTON
  const [disabled, setdisabled] = useState(true)

  // LABEL
  const [labelName, setlabelName] = useState('')
  const [labelEmail, setlabelEmail] = useState('')
  const [lablePhone, setlabelPhone] = useState('')
  const [lableMessage, setlabelMessage] = useState('')

  // ERROR MESSAGE
  const [nameError, setnameError] = useState('')
  const [emailError, setemailError] = useState('')
  const [phoneError, setphoneError] = useState('')
  const [messageError, setmessageError] = useState('')

  const nameValidation = ()=> {
    return (/^[a-zA-Z]+$/.test(document.getElementById('name').value))
  }

  const emailValidation = ()=> {
    return(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById('email').value))
  }

  const phoneValidation = ()=> {
    return(/^(002)?01[0125]\d{8}$/.test(document.getElementById('phone').value))
  }

  const messageValidation = ()=> {
    return(/^[a-zA-Z0-9]+$/g.test(document.getElementById('message').value))
  }

  //VALIDATION
  const inputsValidation = ()=> {
    if(name){
      setlabelName('Name')
      if(nameValidation()){
        setnameError(null)
      }else{
        setnameError('Please enter your name')
      }
    }

    if(email){
      setlabelEmail('Email')
      if(emailValidation()){
        setemailError(null)
      }else{
        setemailError('Please enter a valid email address')
      }
    }

    if(phone){
      setlabelPhone('Phone')
      if(phoneValidation()){
        setphoneError(null)
      }else{
        setphoneError('Please enter your phone number')
      }
    }

    if(message){
      setlabelMessage('Message')
      if(messageValidation()){
        setmessageError(null)
      }else{
        setmessageError('Please enter your message')
      }
    }

    if(nameValidation() && emailValidation() && phoneValidation() && messageValidation()){
      setdisabled(false)
    }
  }
  
  return (
    <section className='p-xl-5 p-0'>
      <div className='container pt-5 my-5 px-xl-5 px-0'>
        <h2 className={`text-center text-white ${style.ContactTitle} mb-0 pb-3 mt-5`}>CONTACT ME</h2>
        <Star/>
      </div>
      <div className='row p-lg-5 p-2 mx-2'>
        <div className="col-lg-8 mx-auto">
          <form>
            <div className="form-group mb-0 pb-4">
              {labelName? <label htmlFor='name' className='fw-semibold text-white'>{labelName}</label>:''}
              <input type="text" className='form-control mt-1 p-2' id='name' name='name' placeholder='Name' onKeyUp={()=>inputsValidation()} onFocus={()=> setname(true)}/>
              <div className="d-flex justify-content-center">
                {nameError? <i className='fa fa-circle mt-2 pt-1 me-2 text-danger'></i>:''}
                {nameError? <p className='text-danger fs-6 fw-semibold pt-2'>{nameError}</p>:''}
              </div>
            </div>

            <div className="form-group mb-0 pb-4">
              {labelEmail? <label htmlFor='email' className='fw-semibold text-white'>{labelEmail}</label>:''}
              <input type="email" className='form-control mt-1 p-2' id='email' name='email' placeholder='Email' onKeyUp={()=> inputsValidation()} onFocus={()=> setemail(true)}/>
              <div className="d-flex justify-content-center">
                {emailError? <i className='fa fa-circle mt-2 pt-1 me-2 text-danger'></i>:''}
                {emailError? <p className='text-danger fs-6 fw-semibold pt-2'>{emailError}</p>:''}
              </div>
            </div>

            <div className="form-group mb-0 pb-4">
              {lablePhone? <label htmlFor='phone' className='fw-semibold text-white'>{lablePhone}</label>:''}
              <input type="phone" className='form-control mt-1 p-2' id='phone' name='phone' placeholder='Phone Number' onKeyUp={()=> inputsValidation()} onFocus={()=> setphone(true)}/>
              <div className="d-flex justify-content-center">
                {phoneError? <i className='fa fa-circle mt-2 pt-1 me-2 text-danger'></i>:''}
                {phoneError? <p className='text-danger fs-6 fw-semibold pt-2'>{phoneError}</p>:''}
              </div>
            </div>

            <div className="form-group mb-0 pb-4">
              {lableMessage? <label htmlFor='message' className='fw-semibold text-white'>{lableMessage}</label>:''}
              <input type="text" className='form-control mt-1 p-2' id='message' name='message' placeholder='Message' onKeyUp={()=> inputsValidation()} onFocus={()=> setmessage(true)}/>
              <div className="d-flex justify-content-center">
                {messageError? <i className='fa fa-circle mt-2 pt-1 me-2 text-danger'></i>:''}
                {messageError? <p className='text-danger fs-6 fw-semibold pt-2'>{messageError}</p>:''}
              </div>
            </div>

            <div className="form-group mt-3">
              <button className="fs-5 btn btn-danger text-white px-4 py-3" style={{backgroundColor:'#2c3e50'}} disabled={disabled} type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
