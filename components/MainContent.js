import Image from 'next/image'

export default function MainContent () {
  return (
    <section>
      <header className='flex flex-col text-right'>
        <div>
          <h1 className='font-sans text-8xl lowercase'>Kelli Landry</h1>
          <h2 className='font-sans text-4xl lowercase'>Web Developer</h2>
          <h3 className='font-sans text-2xl lowercase'><span>📍</span>lafayette, la</h3>
        </div>
      </header>
      <div>
        <Image
          src='/New_Mexico_Overlay.png'
          width={400}
          height={400}
          layout='responsive'
          quality={65}
          alt='Picture of Kelli in New Mexico'
        />
      </div>
    </section>
  )
}
