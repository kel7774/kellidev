// import styles from '../styles/Layout.module.css'
import './MainNavigation'
import MainNavigation from './MainNavigation'
import Footer from '../components/Footer'
export default function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main>
        {props.children}
        <div style={{ paddingBottom: '4rem' }} />
        <Footer />
      </main>
    </div>
  )
}
