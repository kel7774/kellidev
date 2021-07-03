import { NextSeo } from 'next-seo'
import Layout from '../layout/Layout'
import styles from '../styles/Home.module.css'
import MainContent from '../components/MainContent'

export default function Home () {
  return (
    <Layout className={styles.container}>
      <NextSeo
        title='Kelli Landry - Home'
        description='Kelli Landry, Web Developer'
        canonical='http://www.kellilandry.dev'
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico'
          }
        ]}
      />
      <MainContent className={styles.main} />
    </Layout>
  )
}
