import React, {useRef, useState}from 'react'
import Header from './Header'
import { checkValidEmail } from '../utils/validate'
import { checkValidPassword } from '../utils/validate'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)
  const [emailErrorMsg, setEmailErrorMsg] = useState(null)
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(null)

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  // const email = useRef(null)
  // const password = useRef(null)

  const validateEmail = (e) => {
    const isValidEmailMsg = checkValidEmail(e.target.value)
    setEmailErrorMsg(isValidEmailMsg)
  }

  const validatePassword = (e) => {
    const isValidPasswordMsg = checkValidPassword(e.target.value)
    setPasswordErrorMsg(isValidPasswordMsg)
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
      <img 
      src='https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
      alt='background' 
      />
      </div>
      <form onSubmit={(e) => e.prevent.default()} className='w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'> {isSignInForm ? 'Sign In' : 'Sign Up'} </h1>
        {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />}
        <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' onChange={validateEmail} />
        {emailErrorMsg !== null && <h4 className='text-red-500, font-bold'> {emailErrorMsg} </h4>}
        <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' onChange={validatePassword} />
        <h4 className='text-red-500, font-bold'>{passwordErrorMsg}</h4>
        <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        <h4 className='py-4 cursor-pointer'onClick={handleSignInForm}>{isSignInForm ? 'New to NetFlix ? Sign Up Now' : 'Already Registered ? Sign In Now'}</h4>
      </form>
    </div>
  )
}

export default Login