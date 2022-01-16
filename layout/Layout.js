import './MainNavigation'
import MainNavigation from './MainNavigation'
import Footer from '../components/Footer'

export default function Layout(props) {
  return (
    <div className='font-sans'>
      <MainNavigation />
      <main className='min-h-screen bg-indigo-200 dark:bg-indigo-600'>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}
