import Image from 'next/image'

export default function MainContent () {
  return (
    <section>
      <header>
        <div className='flex flex-col text-right px-3'>
          <h1 className='font-light text-8xl lowercase dark:text-indigo-100'>Kelli Landry</h1>
          <h2 className='text-4xl lowercase dark:text-indigo-100'>software developer, scrum master</h2>
          <h3 className='text-2xl lowercase dark:text-indigo-100'><span>📍</span>lafayette, la</h3>
        </div>
      </header>
      <div className='w-full flex justify-center p-7 profilePicBox'>
        <Image 
          src='/New_Mexico_Overlay.png' 
          alt='Kelli Landry Main' 
          height='600'
          width='500'
          objectFit='cover' 
          className='rounded-lg'
        />
      </div>
    </section>
  )
}
