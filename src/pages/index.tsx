import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'
import Tasks from './Tasks'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div > 
      
       <Tasks/>

    </div>
  )
}
