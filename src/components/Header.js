import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/store/userSlice'
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants'
import { toggleGptSearchView } from '../utils/store/gptSlice'
import { changeLanguage } from '../utils/store/confgSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const  showgptSearch= useSelector((store)=> store.gpt.showGptSearch)
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
    })
    .catch((error) => {
    })
  }
  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView());
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL} = user
        dispatch(addUser({
          uid,
          email,
          displayName,
          photoURL
        }))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });
    return () => unsubscribe()
  }, []);
  const handleLanguageChange =(e)=>{
    dispatch(changeLanguage(e.target.value))
   }
  return (
    <div className='absolute w-screen px-8 py-2  bg-black md:bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
      <img
      className='w-44 m-auto md:m-0'
      src={LOGO}
      alt='logo'
      />
      {user && <div className='flex p-2 justify-between'>
        {showgptSearch &&
        <select className='m-2 p-2 bg-gray-900 text-white cursor-pointer' onChange={handleLanguageChange} >
          {SUPPORTED_LANGUAGES?.map((Lang)=>(<option 
           key={Lang.identifier} value={Lang.identifier}>{Lang.name}</option>))}
         </select>}
        <button 
        className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg ' onClick={handleGptSearchClick}>{(showgptSearch)?("Homepage"):("GPT Search")}</button>
        <img 
          className='w-12 h-12 hidden md:block'
          alt='userIcon'
          src={user?.photoURL}
        />
        <button className='font-bold text-white' onClick={handleSignOut}> Sign Out </button>
      </div>}
    </div>
  )
}

export default Header