import React from 'react'
import Header from './Header'
import { useState } from 'react'



const Login = () => {

    const [issigninform ,setissigninform]=useState(true)
    const togglesigninform =()=>{
        setissigninform(!issigninform)
    }
  return (
    <div >
        <div >
        <Header/>
        </div>
     <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='bgimg'></img>
    </div>
     
    <form className='bg-black absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-xl p-2 my-2'>{issigninform ? "Sign-In" : "Sign-Up"}</h1>
        {!issigninform&&<input type='text' className='py-2 my-4 rounded-lg w-full bg-gray-600' placeholder='fullname'></input>}
        <input type='text' className='py-2 my-4 rounded-lg w-full bg-gray-600' placeholder='email/phoneno'></input>
        <input type='password'className='py-2 my-4  rounded-lg w-full bg-gray-600' placeholder='password'></input>
        <button className='p-2 my-4 text-red-500 border-2 rounded-lg w-full'>{issigninform?" Sign-In" : "Sign-Up"}</button>
        <p className='m-2 cursor-pointer'onClick={togglesigninform}> {issigninform?"New to netflix ?sign-up now":"Already registered ?sign-innow" }</p>
    </form>
    </div>
   
  )
}

export default Login