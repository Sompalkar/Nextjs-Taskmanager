import React from 'react'
import Link from 'next/link' 

const _Navbar = () => {
  return ( 

      
      <div  className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-around drop-shadow-2xl rounded-l ">
    <a  className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span  className="ml-3 text-xl">Task Manager</span>
    </a>
    <nav  className=" flex flex-wrap items-center text-base justify-between drop-shadow-2xl ">
      <Link href={"/Tasks"}  className="mr-5 hover:text-rose-600 ">Home</Link>
      <Link href={"/aboutUS"}  className="mr-5 hover:text-rose-600 ">About</Link>
      <Link href={"/DisplayTodo"}  className="mr-5 hover:text-rose-600 ">My Tasks </Link>
      <Link href={"/contact"}  className="mr-5 hover:text-rose-600 ">Contact Us</Link> 
    </nav>
    
  </div> 
  )
}

export default _Navbar
