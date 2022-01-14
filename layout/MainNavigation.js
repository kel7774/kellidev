import React from 'react'
import Link from 'next/link'

import useDarkMode from '../pages/helpers/useDarkMode'

export default function MainNavigation () {
  const [active, setActive] = React.useState(false)

  const [colorTheme, setTheme] = useDarkMode()

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <nav className='flex items-center flex-wrap bg-white dark:bg-indigo-800 p-3'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </a>
        </Link>

        {colorTheme === "light" ? (
          <button onClick={() => setTheme("light")}>☀️</button>
          ) : (
          <button onClick={() => setTheme("dark")}>🌚</button>
        )}

        <button className='inline-flex p-3 hover:bg-white dark:hover:bg-indigo-800 rounded lg:hidden text-white ml-auto hover:text-white outline-none' onClick={handleClick}>
          <svg
            className='w-6 h-6 fill-current'
            fill='none'
            stroke={(colorTheme === "dark" ? "black" : "white")}
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div className={`${active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>

          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-light items-center justify-center hover:bg-indigo-400 hover:text-white lowercase dark:text-indigo-100'>
                Home
              </a>
            </Link>
            <Link href='/about'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-light items-center justify-center hover:bg-indigo-400 hover:text-white lowercase dark:text-indigo-100'>
                About
              </a>
            </Link>
            <Link href='/cv'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-light items-center justify-center hover:bg-indigo-400 hover:text-white lowercase dark:text-indigo-100'>
                CV
              </a>
            </Link>
            <Link href='/posts'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-light items-center justify-center hover:bg-indigo-400 hover:text-white lowercase dark:text-indigo-100'>
                Blog
              </a>
            </Link>
            <Link href='/contact'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-light items-center justify-center hover:bg-indigo-400 hover:text-white lowercase dark:text-indigo-100'>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
