import { NextSeo } from 'next-seo'
import MainContent from '../components/MainContent'

export default function Home () {
  return (
    <div>
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
      <MainContent />
    </div>
  )
}
