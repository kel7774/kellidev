import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout'
import LinkSection from '../components/LinkSection'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div>
      <Layout className={styles.container}>
        <Head>
          <title>Kelli Landry - Developer</title>
          <meta name='Kelli Landry - Developer' content='Doing, not trying.' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
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
        <LinkSection
          category='grind'
          firstHref='https://github.com/kel7774'
          firstLinkName='github'
          firstEmoji='👩🏻‍💻'
          secondHref='https://linkedin.com/in/kelli-landry89'
          secondLinkName='linkedin'
          secondEmoji='👩🏻‍🎓'
        />
        <LinkSection
          category='chill'
          firstHref='https://instagram.com/kellifrompierrepart'
          firstLinkName='instagram'
          firstEmoji='📸'
          secondHref='https://open.spotify.com/user/tkel1189?si=6cVIAg_NQXKEf66maNIP5w'
          secondLinkName='spotify'
          secondEmoji='🎧'
        />
      </Layout>
    </div>
  )
}
