import {useRouter} from 'next/router'

export default function Thanks () {
  const router = useRouter()

  return (
    <section className='text-center pt-4'>
      <h1 className='text-indigo-500 dark:text-indigo-200 text-2xl'>thank you!</h1>
      <p className='dark:text-indigo-50 pb-4'>your email was sent successfully. i will get back to you as soon as possible.</p>
      <button className='w-36 border-indigo-500 dark:border-indigo-800 dark:hover:border-indigo-400 bg-indigo-500 dark:bg-indigo-800 text-white tracking-widest hover:bg-indigo-300 hover:border-indigo-300 dark:hover:bg-indigo-400 hover:text-gray-900 dark:hover:text-gray-900 duration-200 ease-in aboutButtonBoxShadow uppercase' onClick={() => router.push('/')}>back home</button>
    </section>
  )
}
