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
        {/* <div className={styles.imgContainer}>
          <Image
            src='/KelliProfile_50.png'
            width={330}
            height={350}
            alt='Kelli Landry Profile Picture'
            className={styles.img}
          />
        </div> */}
      </section>
    </div>
  )
}
