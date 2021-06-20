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
        <p>built and deployed using <a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer'>nextjs</a></p>
      </footer>
    </div>
  )
}
