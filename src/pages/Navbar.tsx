import React from 'react'
import Link from 'next/link' 

const _Navbar = () => {
  return ( 

      
      <div  className=" bg-[#F7F7F7] text-[#BD1E51] container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-around drop-shadow-2xl rounded-l ">
    <a  className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span  className="ml-3 text-xl text-[#BD1E51]">Task Manager</span>
    </a>
    <nav  className=" flex flex-wrap items-center text-base justify-between drop-shadow-2xl ">
      <Link href={"/Tasks"}  className="mr-5 hover:text-slate-900 ">Home</Link>
      <Link href={"/DisplayTodo"}  className="mr-5 hover:text-slate-900 ">My Tasks </Link>
      <Link href={"/aboutUS"}  className="mr-5 hover:text-slate-900 ">About</Link>
      <Link href={"/contact"}  className="mr-5 hover:text-slate-900 ">Contact Us</Link> 
    </nav>
    
  </div> 
  )
}

export default _Navbar
