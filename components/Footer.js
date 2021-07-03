import styles from '../styles/Footer.module.css'
export default function Footer () {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <p>© {year} kellidev</p>
      <p>design inspired by <a href='https://cassidoo.co/' target='_blank' rel='noopener noreferrer'>cassidy williams</a></p>
      <p>built & deployed using <a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer'>nextjs</a> with <a href='https://vercel.com' target='_blank' rel='noopener noreferrer'>vercel</a></p>
    </footer>
  )
}
