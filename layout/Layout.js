// import styles from '../styles/Layout.module.css'
import './MainNavigation'
import MainNavigation from './MainNavigation'
import Footer from '../components/Footer'
export default function Layout(props) {
  return (
    <div className='font-sans'>
      <MainNavigation />
      <main className='min-h-screen bg-gradient-to-b from from-indigo-100 via-indigo-400 to-indigo-500 '>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}
