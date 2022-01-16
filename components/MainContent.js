import Image from 'next/image'

export default function MainContent () {
  return (
    <section>
      <header className='xs:h-80'>
        <div className='flex flex-col text-right px-3'>
          <h1 className='xs:mt-14 sm:mt-0 md:mt-0 lg:mt-14 xl:mt-0 2xl:mt-0 font-sans font-light text-8xl lowercase dark:text-indigo-100'>Kelli Landry</h1>
          <h2 className='font-sans text-4xl lowercase dark:text-indigo-100'>Web Developer</h2>
          <h3 className='font-sans text-2xl lowercase dark:text-indigo-100'><span>📍</span>lafayette, la</h3>
        </div>
      </header>
      <div className='xs:p-7 sm:p-0 md:p-0 lg:p-0 xl:p-0 2xl:p-0'>
        <Image
          src='/New_Mexico_Overlay.png'
          width={500}
          height={500}
          quality={100}
          layout='responsive'
          alt='Picture of Kelli in New Mexico'
          className='xs:rounded-full sm:rounded-none md:rounded-none lg:rounded-none xl:rounded-none 2xl:rounded-none'
        />
      </div>
    </section>
  )
}
