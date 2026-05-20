import React from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div className=''>
      <header className="p-4 navbarr">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex justify-between w-full">
            <Link href="/" aria-label="Back to homepage" className="flex items-center p-2">
              <div className="flex items-center space-x-3">
                {/* Simple crypto coin SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
                  <defs>
                    <linearGradient id="g" x1="0" x2="1">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                  <circle cx="32" cy="32" r="30" fill="url(#g)" />
                  <circle cx="32" cy="32" r="22" fill="#fff" opacity="0.06" />
                  <path d="M40 22c-1.5-1.5-4-2-7-2s-5.5.5-7 2c-1.5 1.5-2 4-2 7s.5 5.5 2 7c1.5 1.5 4 2 7 2s5.5-.5 7-2c1.5-1.5 2-4 2-7s-.5-5.5-2-7z" fill="#fff" opacity="0.9" />
                  <text x="32" y="37" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">Ψ</text>
                </svg>

                <span className="font-semibold text-2xl select-none">CryptoTracker</span>
              </div>
            </Link>
            <ul className="items-stretch hidden space-x-3 lg:flex">
              <li className="flex justify-between w-full">
                <a rel="noopener noreferrer" className="flex cursor-pointer  items-center px-4 -mb-1 font-semibold dark:border-transparent">Home</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" className="flex cursor-pointer  items-center px-4 -mb-1 font-semibold ">Company</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" className="flex  cursor-pointer items-center px-4 -mb-1 font-semibold dark:border-transparent">Services</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" className="flex cursor-pointer  items-center px-4 -mb-1 font-semibold dark:border-transparent">Blog</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" className="flex cursor-pointer  items-center px-4 -mb-1 font-semibold dark:border-transparent">Contact</a>
              </li>
            </ul>
          </div>

          
       
          <button className="p-0 relative left-4 lg:hidden">

            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <div className='w-32 sm:w-56'>

                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Homepage</a></li>
                  <li><a>Portfolio</a></li>
                  <li><a>About</a></li>
                </ul>
              </div>

            </div>


          </button>
        </div>
      </header>

    </div>
  )
}

export default Navbar
