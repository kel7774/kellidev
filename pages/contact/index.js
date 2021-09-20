import { NextSeo } from 'next-seo'
import ContactForm from '../../components/ContactForm'
export default function Contact () {
  return (
    <div className='p-4'>
      <NextSeo
        title='Kelli Landry - Contact'
        description='Contact page for Kelli Landry with a form provided.'
        canonical='http://kellilandry.dev/contact'
      />
      <section>
        <h1 className='text-indigo-500 font-light text-2xl'>send me a line</h1>
        <ContactForm />
      </section>
    </div>
  )
}
