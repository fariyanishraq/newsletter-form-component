import Success from '../assets/icon-success.svg'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Thanks() {
  const email = localStorage.getItem("email")
  const Navigate = useNavigate()
  const HandleSubmit = () =>{
    Navigate('/')
    localStorage.removeItem("email")
  }
  return (
    <div className="grid place-items-center overflow-hidden h-screen">
      <motion.div 
       initial={{y:'-500%'}} 
       transition={{delay: 0.75}} 
       animate={{y:'0%'}} 
       exit={{opacity: 1}}
      className="w-[310px] bg-white p-[30px] grid grid-flow-row gap-5 max-sm:shadow-md max-sm:border rounded-xl">
        <div>
          <img width={35} src={Success} alt="icon" />
        </div>
        <h1 className='text-[30px] font-bold tracking-wide text-blue-800'>Thanks for Subscribing!</h1>
        <p className='text-[14px] leading-relaxed text-blue-950'>
          Thanks for  participating. 
          Please note that this is not a real newsletter app.
          It is just a demo app for beginner level web-developer.
          The email address <span className='text-blue-800 font-bold'>{email}</span> has not been stored anywhere or it will be used anywhere.
        </p>
        <button onClick={HandleSubmit} type='submit' className='w-full rounded-lg font-bold tracking-wide p-[10px] bg-blue-900 text-white '>Dismiss message</button>
      </motion.div>
    </div>
  )
}
