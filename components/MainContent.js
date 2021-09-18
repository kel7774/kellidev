import Image from 'next/image'
import Link from 'next/link'

export default function MainContent () {
  return (
    <div>
      <section className='flex flex-col text-center'>
        <header>
          <h1 className='font-sans text-8xl lowercase'>Kelli Landry</h1>
          <h2 className='font-sans text-4xl lowercase'>Web Developer</h2>
          <h3 className='font-sans text-2xl lowercase'><span>📍</span>lafayette, la</h3>
        </header>
      </section>
    </div>
  )
}
