import Image from 'next/image'

export default function MainContent () {
  return (
    <section>
      <header>
        <div className='flex flex-col text-right px-3'>
        <h1 className='font-light text-8xl lowercase dark:text-indigo-100 animate__animated animate__fadeInLeft'>Kelli Landry</h1>
          <h2 className='text-4xl lowercase dark:text-indigo-100 animate__animated animate__fadeInLeft'>scrum master | project manager</h2>
          <h3 className='text-2xl lowercase dark:text-indigo-100 animate__animated animate__fadeInUp'><span>📍</span>louisiana, us</h3>
        </div>
      </header>
      <div className='w-full flex justify-center p-7 profilePicBox'>
        <Image 
          src='/website_photo.jpg' 
          alt='Kelli Landry Main' 
          height='600'
          width='500'
          objectFit='cover' 
          className='rounded-lg'
        />
      </div>
      <p className='text-lg text-center pb-5 pl-2 pr-2 lowercase dark:text-indigo-100'>
        project manager | cajun | world traveler | lap swimmer | dog enthusiast
      </p>
    </section>
  )
}
