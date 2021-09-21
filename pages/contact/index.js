import { NextSeo } from 'next-seo'
import ContactForm from '../../components/ContactForm'
export default function Contact () {
  return (
    <div className='justify-center flex flex-row'>
      <NextSeo
        title='Kelli Landry - Contact'
        description='Contact page for Kelli Landry with a form provided.'
        canonical='http://kellilandry.dev/contact'
      />
      <div className='flex flex-row p-4'>
        <section className=''>
          <h1 className='text-indigo-500 font-light text-2xl py-4'>send me a line</h1>
          <ContactForm />
        </section>
      </div>
    </div>
  )
}
