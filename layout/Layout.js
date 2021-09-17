// import styles from '../styles/Layout.module.css'
import './MainNavigation'
import MainNavigation from './MainNavigation'
import Footer from '../components/Footer'
export default function Layout(props) {
  return (
    <div className='font-sans'>
      <MainNavigation />
      <main>
        {props.children}
        <Footer />
      </main>
    </div>
  )
}
