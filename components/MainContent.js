import Image from 'next/image'

export default function MainContent () {
  return (
    <section>
      <header>
        <div className='flex flex-col text-right px-3'>
          <h1 className='font-light text-8xl lowercase dark:text-indigo-100'>Kelli Landry</h1>
          <h2 className='text-4xl lowercase dark:text-indigo-100'>Web Developer</h2>
          <h3 className='text-2xl lowercase dark:text-indigo-100'><span>📍</span>lafayette, la</h3>
        </div>
      </header>
      <div className='xs:p-7 sm:p-4 md:p-4 lg:p-4 xl:p-4 2xl:p-4'>
        <Image
          src='/New_Mexico_Overlay.png'
          width='500'
          height='500'
          layout='responsive'
          alt='Picture of Kelli in New Mexico'
          className='rounded-full'
        />
      </div>
    </section>
  )
}
