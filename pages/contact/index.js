import { NextSeo } from 'next-seo'

export default function Contact () {
  return (
    <div className=''>
      <NextSeo
        title='Kelli Landry - Contact'
        description='Contact page for Kelli Landry with a form provided.'
        canonical='http://kellilandry.dev/contact'
      />
        <section className='flex flex-col items-center py-2'>
          <h1 className='text-indigo-500 dark:text-indigo-200 text-2xl py-4 '>send me a line</h1>
          <a href='mailto:landry.kel@gmail.com' className='text-lg text-indigo-600 hover:text-indigo-800 dark:text-indigo-300 dark:hover:text-indigo-50'>e-mail me 📧</a>
          <a href='https://www.linkedin.com/in/kellilandry/' target='_blank' rel='noopener noreferrer' className='block text-lg text-indigo-600 hover:text-indigo-800 dark:text-indigo-300 dark:hover:text-indigo-50 mt-4'>connect on linkedin 💼</a>
          <a href='https://calendly.com/landry-kel/30min' target='_blank' rel='noopener noreferrer' className='block text-lg text-indigo-600 hover:text-indigo-800 dark:text-indigo-300 dark:hover:text-indigo-50 mt-4'>schedule consult thru calendly 📅</a>
          <p className='dark:text-indigo-50 text-center w-1/2 mt-4'>though i love referrals from social media, i ask that our main communication be done through email until we can speak in person through either a zoom or phone call</p>
        </section>
    </div>
  )
}
