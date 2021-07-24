import Image from 'next/image'
import Link from './Link'
import styles from '../styles/MainContent.module.css'

export default function MainContent () {
  return (
    <div className={styles.contentContainer}>
      <section className={styles.headerContent}>
        <header className={styles.header}>
          <h1 className={styles.title}>kelli landry</h1>
          <h2>web developer in lafayette, la</h2>
        </header>
        <div className={styles.imgContainer}>
          <Image
            src='/KelliProfile_50.png'
            width={330}
            height={350}
            alt='Kelli Landry Profile Picture'
            className={styles.img}
          />
        </div>
      </section>
      <Link
        href='https://github.com/kel7774'
        name='github'
        emoji='👩🏻‍💻'
      />
      <Link
        href='https://linkedin.com/in/kelli-landry89'
        name='linkedin'
        emoji='👩🏻‍🎓'
      />
      <Link
        href='https://instagram.com/kellifrompierrepart'
        name='instagram'
        emoji='📸'
      />
      <Link
        href='https://open.spotify.com/user/tkel1189?si=6cVIAg_NQXKEf66maNIP5w'
        name='spotify'
        emoji='🎧'
      />
    </div>
  )
}
