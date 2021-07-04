import { NextSeo } from 'next-seo'
import ContactForm from '../../components/ContactForm'
export default function Contact () {
  return (
    <div>
      <NextSeo
        title='Kelli Landry - Contact'
        description='Contact page for Kelli Landry with a form provided.'
        canonical='http://kellilandry.dev/contact'
      />
      <section>
        <h1>send me a line</h1>
        <ContactForm />
      </section>
    </div>
  )
}
