import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kelli Landry - Developer</title>
        <meta name='Kelli Landry - Developer' content='Doing, not trying.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav className={styles.nav}>
        <Link href='/'>home</Link>
        <Link href='/cv'>cv</Link>
        <Link href='/contact'>contact</Link>
      </nav>
      <main className={styles.main}>
        <section className={styles.headerContent}>
          <header className={styles.header}>
            <h1 className={styles.title}>kelli landry</h1>
            <h2>web developer in lafayette, la</h2>
          </header>
          <Image
            src='/KelliProfile_50.png'
            width={350}
            height={350}
            alt='Kelli Landry Profile Picture'
            className={styles.imgContainer}
          />
        </section>
        <h4>grind</h4>
        <section className={styles.links}>
          <span role='img' className='span'>👩🏻‍💻</span><a href='https://github.com/kel7774' target='_blank' rel='noopener noreferrer'>github</a>
          <span role='img' className='span'>👩🏻‍🎓</span><a href='https://www.linkedin.com/in/kelli-landry89/' target='_blank' rel='noopener noreferrer'>linkedin</a>
        </section>
        <h4>chill</h4>
        <section className={styles.links}>
          <span role='img' className='span'>📸</span><a href='https://instagram.com/kellifrompierrepart/' target='_blank' rel='noopener noreferrer'>instagram</a>
          <span role='img' className='span'>🎧</span><a href='https://open.spotify.com/user/tkel1189?si=6cVIAg_NQXKEf66maNIP5w' target='_blank' rel='noopener noreferrer'>spotify</a>
        </section>
      </main>

      <footer className={styles.footer}>
        powered by coffee, depression, spotify playlists, long walks to my mailbox, and wings.
      </footer>
    </div>
  )
}
