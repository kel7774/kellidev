import dynamic from 'next/dynamic'
import styles from '../styles/Layout.module.css'
import MainNavigation from './MainNavigation'
import Footer from '../components/Footer'
const ThemeToggle = dynamic(() => import('../components/ThemeToggle'), {
  ssr: false
})
export default function Layout (props) {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>
        <ThemeToggle />
        {props.children}
        <Footer />
      </main>
    </div>
  )
}
