import React from 'react'
import Link from 'next/link'

import useDarkMode from '../pages/helpers/useDarkMode'

export default function MainNavigation () {
  const [active, setActive] = React.useState(false)

  const [colorTheme, setTheme] = useDarkMode()

  return (
    <>
      <nav className='flex items-center flex-wrap bg-indigo-50 dark:bg-indigo-800 shadow-inner p-3 sticky top-0 z-50'>
        <Link href='/' className='inline-flex items-center p-2 mr-4'>
          <span className='navBar font-bold text-indigo-800 dark:text-indigo-100 uppercase mx-1'>Kelli</span>
        </Link>

        <Link href='/' className='inline-flex items-center p-2 mr-4 lg:hidden'>
          <span className='navBar font-nav text-indigo-600 dark:text-indigo-300 uppercase'>Landry</span>
        </Link>

        {colorTheme === "light" ? (
          <button className="ml-2" onClick={() => setTheme("light")}>☀️</button>
          ) : (
          <button className="ml-2" onClick={() => setTheme("dark")}>🌚</button>
        )}

          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto uppercase navBar'>
            <Link
              href='/'
              className='mr-2'
            >
              Home
            </Link>
            <Link
              href='/about'
            >
              About
            </Link>
            <Link
              href='/cv'
            >
              CV
            </Link>
            <Link
              href='/contact'
            >
              Contact
            </Link>
          </div>

      </nav>
    </>
  );
}
