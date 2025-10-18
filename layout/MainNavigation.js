import React from 'react'
import Link from 'next/link'

import useDarkMode from '../pages/helpers/useDarkMode'

export default function MainNavigation () {
  const [active, setActive] = React.useState(false)

  const [colorTheme, setTheme] = useDarkMode()

  return (
    <>
      <nav className='bg-indigo-50 dark:bg-indigo-800 shadow-inner p-3 sticky top-0 z-50 flex flex-row justify-between'>

        <div>
          <Link href='/' className='inline-flex items-center p-2 mr-4'>
            <span className='navBar font-bold text-indigo-800 dark:text-indigo-100 uppercase mx-1'>Kelli</span>
          </Link>

          <Link href='/' className='inline-flex items-center p-2 mr-4'>
            <span className='navBar font-nav text-indigo-600 dark:text-indigo-300 uppercase'>Landry</span>
          </Link>

          {colorTheme === "light" ? (
            <button className="ml-2" onClick={() => setTheme("light")}>☀️</button>
            ) : (
            <button className="ml-2" onClick={() => setTheme("dark")}>🌚</button>
          )}
        </div>

        <div>
          <Link href='/' className='inline-flex items-center p-2 mr-4'>
            <span className='navBar font-bold text-indigo-800 dark:text-indigo-100 uppercase mx-1'>Home</span>
          </Link>
          <Link href='/about'>
            <span className='navBar font-bold text-indigo-800 dark:text-indigo-100 uppercase mx-1'>About</span>
          </Link>
          <Link href='/cv'>
            <span className='navBar font-bold text-indigo-800 dark:text-indigo-100 uppercase mx-1'>CV</span>
          </Link>
          <Link href='/kelli-do'>
            <span className='navBar font-bold text-indigo-800 dark:text-indigo-100 uppercase mx-1'>Do</span>
          </Link>
          <Link href='/contact'>
            <span className='navBar font-bold text-indigo-800 dark:text-indigo-100 uppercase mx-1'>Contact</span>
          </Link>
        </div>

      </nav>
    </>
  );
}
