import Head from 'next/head'
import Layout from '../layout/Layout'
import styles from '../styles/Home.module.css'
import MainContent from '../components/MainContent'
export default function Home () {
  return (
    <Layout className={styles.container}>
      <Head>
        <title>Kelli Landry - Developer</title>
        <meta name='Kelli Landry - Developer' content='Doing, not trying.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <MainContent />
      </main>
    </Layout>
  )
}
