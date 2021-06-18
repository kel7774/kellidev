import Link from 'next/link'
import styles from '../styles/MainNavigation.module.css'
export default function MainNavigation () {
  return (
    <header>
      <nav className={styles.nav}>
        <Link href='/'>home</Link>
        <Link href='/cv'>cv</Link>
        <Link href='/contact'>contact</Link>
      </nav>
    </header>
  )
}
