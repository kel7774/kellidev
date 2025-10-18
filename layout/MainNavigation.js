import React from 'react'
import Link from 'next/link'

import useDarkMode from '../pages/helpers/useDarkMode'

export default function MainNavigation () {
  const [active, setActive] = React.useState(false)

  const [colorTheme, setTheme] = useDarkMode()

  return (
    <>
      <nav className='bg-indigo-50 dark:bg-indigo-800 shadow-inner p-3 sticky top-0 z-50 flex flex-row justify-between'>

        <div className="xs:justify-start xs:flex xs:flex-row">
          <Link href='/' className='inline-flex items-center py-2'>
            <span className='navBar font-bold text-indigo-800 dark:text-indigo-100 uppercase mx-1 xs:text-sm'>Kelli</span>
          </Link>

          <Link href='/' className='inline-flex items-center py-2'>
            <span className='navBar font-nav text-indigo-600 dark:text-indigo-300 uppercase xs:text-sm'>Landry</span>
          </Link>

          {colorTheme === "light" ? (
            <button className="pl-1" onClick={() => setTheme("light")}>☀️</button>
            ) : (
            <button className="pl-1" onClick={() => setTheme("dark")}>🌚</button>
          )}
        </div>

        <div className='xs:justify-end xs:flex xs:flex-row xs:content-center'>
          <Link href='/'>
            <span className='navBar font-bold text-indigo-800 dark:text-indigo-100 uppercase mx-1 xs:text-sm'>Home</span>
          </Link>
          <Link href='/about'>
            <span className='navBar font-bold text-indigo-800 dark:text-indigo-100 uppercase mx-1 xs:text-sm'>About</span>
          </Link>
          <Link href='/cv'>
            <span className='navBar font-bold text-indigo-800 dark:text-indigo-100 uppercase mx-1 xs:text-sm'>CV</span>
          </Link>
          <Link href='/kelli-do'>
            <span className='navBar font-bold text-indigo-800 dark:text-indigo-100 uppercase mx-1 xs:text-sm'>Do</span>
          </Link>
          <Link href='/contact'>
            <span className='navBar font-bold text-indigo-800 dark:text-indigo-100 uppercase mx-1 xs:text-sm'>Contact</span>
          </Link>
        </div>

      </nav>
    </>
  );
}
