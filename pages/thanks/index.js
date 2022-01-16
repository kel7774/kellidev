import Link from 'next/link'
export default function Thanks () {
  return (
    <section className='justify-center flex flex-col text-center p-4'>
      <h1 className='text-indigo-500 dark:text-indigo-200 text-2xl'>thank you!</h1>
      <p className='dark:text-indigo-50'>your email was sent successfully. i will get back to you as soon as possible.</p>
      <Link href='/'>back home</Link>
    </section>
  )
}
