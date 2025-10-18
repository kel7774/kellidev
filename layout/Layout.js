import MainNavigation from './MainNavigation'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <main className='font-sans'>
      <MainNavigation />
      <div className='min-h-screen bg-indigo-200 dark:bg-indigo-600'>
        {children}
      </div>
      <Footer />
    </main>
  )
}
