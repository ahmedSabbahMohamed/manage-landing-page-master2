'use client'
import Image from 'next/image'
import logo from "../assets/images/logo.svg"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { headerVariants } from '@/framerMotionVariants'
import GetStarted from './GetStarted'
import menu from "@/assets/images/icon-hamburger.svg"

function Header() {

    const showMenu = e => {
        let myMenu = document.querySelector(".my-menu")
        myMenu.classList.toggle("hidden")
    }

  return (
    <>
    <motion.header 
        variants={ headerVariants }
        initial="hidden"
        animate="visible"
        className='container mx-auto px-2 py-10 flex justify-between items-center'
    >

        {/* LOGO */}
        <div className="logo">
            <Link href="/">
                <Image src={ logo } alt='logo' />
            </Link>
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:block">
            <nav className="">
                <ul className="flex flex-row items-center gap-5 font-semibold text-dark-blue">
                    <li>
                        <Link className='hover:text-dark-gray-blue focus:text-dark-gray-blue' href="/">Pricing</Link>
                    </li>
                    <li>
                        <Link className='hover:text-dark-gray-blue focus:text-dark-gray-blue' href="/">Product</Link>
                    </li>
                    <li>
                        <Link className='hover:text-dark-gray-blue focus:text-dark-gray-blue' href="/">About Us</Link>
                    </li>
                    <li>
                        <Link className='hover:text-dark-gray-blue focus:text-dark-gray-blue' href="/">Careers</Link>
                    </li>
                    <li>
                        <Link className='hover:text-dark-gray-blue focus:text-dark-gray-blue' href="/">Community</Link>
                    </li>
                </ul>
            </nav>
        </div>

        {/* GET STARTED */}
        <div className="hidden md:block">
            <GetStarted />
        </div>

        {/* MOBILE NAV */}
        <div className='md:hidden'>
            <button onClick={e => showMenu(e)}>
                <Image src={ menu } alt='menu' />
            </button>
        </div>

        <div className='my-menu hidden absolute top-28 left-1/2 -translate-x-1/2 w-[90%] bg-very-light-gray p-5 rounded-lg shadow-2xl'>
                <ul className='flex flex-col gap-4 text-very-dark-blue font-bold text-center'>
                    <li>
                        <Link className='hover:text-dark-gray-blue focus:text-dark-gray-blue' href="/">Pricing</Link>
                    </li>
                    <li>
                        <Link className='hover:text-dark-gray-blue focus:text-dark-gray-blue' href="/">Product</Link>
                    </li>
                    <li>
                        <Link className='hover:text-dark-gray-blue focus:text-dark-gray-blue' href="/">About Us</Link>
                    </li>
                    <li>
                        <Link className='hover:text-dark-gray-blue focus:text-dark-gray-blue' href="/">Careers</Link>
                    </li>
                    <li>
                        <Link className='hover:text-dark-gray-blue focus:text-dark-gray-blue' href="/">Community</Link>
                    </li>
                </ul>
        </div>


        
    </motion.header>
    </>
  )
}

export default Header