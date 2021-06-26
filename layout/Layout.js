import styles from '../styles/Layout.module.css'
import MainNavigation from './MainNavigation'
export default function Layout (props) {
  const year = new Date().getFullYear()
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>
        <p>© {year} kellidev</p>
        <p>design inspired by <a href='https://cassidoo.co/' target='_blank' rel='noopener noreferrer'>cassidy williams</a></p>
        <p>built & deployed using <a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer'>nextjs</a> with <a href='https://vercel.com' target='_blank' rel='noopener noreferrer'>vercel</a></p>
      </footer>
    </div>
  )
}
