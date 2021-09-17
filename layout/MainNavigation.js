import Link from 'next/link'
import styles from '../styles/MainNavigation.module.css'
export default function MainNavigation () {
  return (
    <nav className={styles.nav}>
      <ul className={styles.listStyle}>
        <li className={styles.linkStyle}><button className={styles.btn}><Link href='/'>home</Link></button></li>
        <li className={styles.linkStyle}><Link href='/about'>about</Link></li>
        <li className={styles.linkStyle}><Link href='/cv'>cv</Link></li>
        <li className={styles.linkStyle}><Link href='/posts'>blog</Link></li>
        <li className={styles.linkStyle}><Link href='/contact'>contact</Link></li>
      </ul>
    </nav>
  )
}
