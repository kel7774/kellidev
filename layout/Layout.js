import MainNavigation from './MainNavigation'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <div className='font-sans'>
      <MainNavigation />
      <main className='min-h-screen bg-indigo-200 dark:bg-indigo-600'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
