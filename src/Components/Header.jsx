import React, { useContext, useEffect, useState } from 'react'
import logo from "../assets/Images/logo.png"
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiMiniMoon } from "react-icons/hi2";
import { HiMiniSun } from "react-icons/hi2";
import { ThemeContext } from '../Context/ThemeContext';

function Header() {
    const [toggle, setToggle] = useState(false)
    const {theme, setTheme}= useContext(ThemeContext)
    
    useEffect(() => {
        console.log("Theme",theme);   
    },[])

  return (
    <div className='flex items-center p-3'>
        <img className='w-14 h-14' src={logo} alt="" />
        <div className='flex items-center bg-slate-200 p-2 w-full rounded-full mx-5'>
        <HiMagnifyingGlass/>
        <input type="text" placeholder='Search Games' className='bg-transparent rounded-full outline-none w-full px-2 placeholder:'/>
        </div>

        <div>
            {theme == 'light' ? <HiMiniMoon onClick={()=> {setTheme('dark');localStorage.setItem('theme','dark')}} className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'/> : 
            <HiMiniSun onClick={()=> {setTheme('light');localStorage.setItem('theme','light')}} className='text-[35px] bg-white text-black p-1 rounded-full cursor-pointer'/>}
        </div>

    </div>
  )
}

export default Header
