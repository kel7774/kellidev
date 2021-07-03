import styles from '../styles/Layout.module.css'
import MainNavigation from './MainNavigation'
import Footer from '../components/Footer'
export default function Layout (props) {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>
        {props.children}
        <Footer />
      </main>
    </div>
  )
}
