import { AnimatePresence, motion } from "framer-motion"
import { FeatureProps } from "../utils/Types"
import IconList from '../assets/icon-list.svg'
import banner from '../assets/illustration-sign-up-desktop.svg'
import * as z from 'zod'
import * as React from 'react'
import { useNavigate } from "react-router-dom"
import mobileImg from '../assets/illustration-sign-up-mobile.svg'

export default function Home() {
    const emailSchema = z.string().email()
    const [error, setError] = React.useState("")
    const emailRef = React.useRef<HTMLInputElement>(null)
    const Navigate = useNavigate()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(emailRef.current){
             try{
                emailSchema.parse(emailRef.current.value)
                setError('')
                localStorage.setItem('email', emailRef.current.value)
                Navigate('/Thanks')
             }catch(err){
                if(err instanceof z.ZodError){
                    setError(err.message)
                }
             }
        }
    }
    const Feature:FeatureProps[] =[ 
        {id: 0, name:"Product discovery and building what matters", icon:IconList},
        {id: 1, name:"Measuring to ensure updates are a success", icon:IconList},
        {id: 2, name:"And much more!", icon:IconList},
    ]
  return (
    <div className="grid place-items-center h-screen text-blue-950 max-sm:block">
        <AnimatePresence>
        <motion.div 
        initial={{y:'500%'}} 
        transition={{delay: 0.75}} 
        animate={{y:'0%'}} 
        exit={{opacity: 1}}
        className={`max-w-[700px] max-h-[500px] p-[30px] rounded-lg  grid grid-flow-col bg-white 
        max-sm:w-full  max-sm:max-h-screen max-sm:bg-transparent max-sm:p-0 max-sm:grid-flow-row`}>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.95, ease:"easeInOut"}}
            className="w-[350] max-sm:w-full ">
            <img className="w-full hidden max-sm:block"  src={mobileImg} alt="banner" />
            </motion.div>
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.85, ease:"easeInOut"}}
            className="w-[350px] p-[20px] py-[30px] flex flex-col gap-5 max-sm:w-full ">
                <h1 className="text-[40px] tracking-wide font-bold">Stay Updated!</h1>
                <p>
                Join 60,000+ product managers receiving monthly updates on:
                </p>
                <div className="grid grid-flow-row gap-5">
                    {
                        Feature.map((index)=>(
                            <div className="grid grid-flow-col justify-start gap-3" key={index.id}>
                                <img src={index.icon} alt="iconlist"/>
                                <h1>{index.name}</h1>
                            </div>
                        ))
                    }
                </div>
                <form onClick={handleSubmit}  className="mt-[10px] flex flex-col justify-start gap-2">
                    <div>
                        <h1>Email Address</h1>
                        <br />
                        <input 
                        required
                        className="email p-[10px] outline-1 border-gray-500  outline-blue-800 text-blue-800 border text-[16px] w-full" 
                        type="email" 
                        placeholder="email@company.com" 
                        ref={emailRef}
                        name="email" />
                    </div>
                    {error ? <h1 className="text-red-500">Please enter a valid email!</h1>:''}
                    <button className="p-[10px]  rounded-md bg-blue-950 text-white font-bold tracking-wide" type="submit">Subscribe to monthly newsletter</button>
                </form>
            </motion.div>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.95, ease:"easeInOut"}}
             className="w-[350] max-sm:w-full ">
                <img className="max-sm:hidden" src={banner} alt="banner" />
            </motion.div>
        </motion.div>
        </AnimatePresence>
    </div>
    
  )
}
