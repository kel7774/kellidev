import Layout from '../layout/Layout'
import dynamic from 'next/dynamic'
import '../styles/Global.scss'
const ThemeToggle = dynamic(() => import('../components/ThemeToggle'), {
  ssr: false
})
function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ThemeToggle />
    </Layout>
  )
}

export default MyApp
