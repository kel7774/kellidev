import Link from 'next/link'
import Layout from '../../layout/Layout'
export default function Thanks () {
  return (
    <Layout>
      <section>
        <h1>thank you!</h1>
        <p>your email was sent successfully. i will get back to you as soon as possible.</p>
        <Link href='/'>back</Link>
      </section>
    </Layout>
  )
}
