import Image from 'next/image'

export default function MainContent () {
  return (
    <section className='relative'>
      <header>
        <div className='flex flex-col text-right px-3'>
          <h1 className='font-sans font-light text-8xl lowercase'>Kelli Landry</h1>
          <h2 className='font-sans text-4xl lowercase'>Web Developer</h2>
          <h3 className='font-sans text-2xl lowercase'><span>📍</span>lafayette, la</h3>
        </div>
      </header>
      <div className='absolute w-full'>
        <Image
          src='/New_Mexico_Overlay.png'
          width='100%'
          height='100%'
          layout='responsive'
          alt='Picture of Kelli in New Mexico'
        />
      </div>
    </section>
  )
}
