import  { useEffect, useRef } from 'react'

const Demo = () => {
    const name=useRef('sj')
    useEffect(()=>{
    setTimeout(() => {
       name.current="sathish" 
    }, 5000);  
    },[])
   console.log(name.current) 
  return (
    <div>
      <form>
        <h1>{name.current}</h1>
        
      </form>
    </div>
  )
}

export default Demo
