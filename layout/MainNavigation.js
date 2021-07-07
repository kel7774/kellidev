import Link from 'next/link'
import styles from '../styles/MainNavigation.module.css'
export default function MainNavigation () {
  return (
    <nav className={styles.nav}>
      <Link href='/'>home</Link>
      <Link href='/about'>about</Link>
      <Link href='/cv'>cv</Link>
      <Link href='/posts'>blog</Link>
      <Link href='/contact'>contact</Link>
    </nav>
  )
}
