import { NextSeo } from 'next-seo'
import Layout from '../layout/Layout'
import MainContent from '../components/MainContent'
import dynamic from 'next/dynamic'
const ThemeToggle = dynamic(() => import('../components/ThemeToggle'), {
  ssr: false
})
export default function Home () {
  return (
    <Layout>
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
      <ThemeToggle />
      <MainContent />
    </Layout>
  )
}
