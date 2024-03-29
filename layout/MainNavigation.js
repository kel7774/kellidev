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
      <nav className='flex items-center flex-wrap bg-indigo-50 dark:bg-indigo-800 shadow-inner p-3 sticky top-0 z-50'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 navBar'>
            <span className='font-bold text-indigo-800 dark:text-indigo-100 uppercase mx-1'>Kelli</span><span className='font-nav text-indigo-600 dark:text-indigo-300  uppercase'>Landry</span>
          </a>
        </Link>
        {colorTheme === "light" ? (
          <button onClick={() => setTheme("light")}>☀️</button>
          ) : (
          <button onClick={() => setTheme("dark")}>🌚</button>
        )}
        <button className='inline-flex p-3 hover:bg-white dark:hover:bg-indigo-800 rounded lg:hidden text-white ml-auto hover:text-white outline-none' onClick={handleClick}>
        📂
        </button>
        <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='navBar uppercase lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center dark:text-indigo-100'>
                Home
              </a>
            </Link>
            <Link href='/about'>
              <a className='navBar uppercase lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center dark:text-indigo-100'>
                About
              </a>
            </Link>
            <Link href='/cv'>
              <a className='navBar uppercase lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center dark:text-indigo-100'>
                CV
              </a>
            </Link>
            <Link href='/contact'>
              <a className='navBar uppercase lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center dark:text-indigo-100'>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
