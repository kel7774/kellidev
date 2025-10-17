import Image from 'next/image'
import { NextSeo } from 'next-seo'

import Kelli_Profile from '../../public/kelli_smile.png'

export default function About () {
/* const [hidden, setHidden] = React.useState(false)

  const showLong = () => {
    setHidden(true)
  }

  const showShort = () => {
    setHidden(false)
  }

  const showShortest = () => {
    setHidden(false);
  }
*/
  return (
    <div className='flex flex-col justify-center'>
      <NextSeo
        title='Kelli Landry - About'
        description='Kelli Landry - Bio'
        canonical='http://kellilandry.dev/about'
      />
        <section className='text-left xs:px-14 xs:py-14 px-28 py-20 xl:px-96 2xl:px-96 lg:px-72'>
          <article>
            <div className='w-full flex justify-center mb-6'>
              <Image src={Kelli_Profile} alt='Kelli Landry Profile' height='400' width='400' objectFit='cover' className='rounded-full shadow-circle' />
            </div>
          <p className='text-lg dark:text-indigo-50'>hey! my name&apos;s kelli landry. 👆 that&apos;s me!</p>
          <p className='text-lg dark:text-indigo-50 mt-6'>first impressions are everything so, i&apos;m a <a href='https://www.wizardingworld.com/collections/hufflepuff' target='_blank' rel='nooopener noreferrer'>hufflepuff</a>, an <a href='https://www.16personalities.com/infj-personality' target='_blank' rel='nooopener noreferrer'>infj-t</a>, & was once described by a former boss as the 🦄 unicorn extrovert among our team of developers.</p>
          <p className='text-lg dark:text-indigo-50 mt-6'>in december of 2012, i walked across the graduation stage with a degree in social services from ull fully intent on pursuing a dream of helping people as a social worker. for 4 years, i pursued different opportunities to see what would fit. i was a state social worker, case manager for a federal grant, office manager for a psychiatric practice, and aba therapist. like many careers that require heavy mental load, burn out became inevitable, so i decided to take a break. in 2016, my plan was to find a simple job for the in-between while i searched for my next opportunity as a social worker. i found a tech startup for food delivery, and started driving full time. over three years went by, and i took on many positions that spanned multiple departments, but the most challenging and fulfilling was with engineering. in 2018, i began a software development bootcamp while working full time as a quality assurance analyst. after completion, i became a junior developer. </p>
          <p className='text-lg dark:text-indigo-50 mt-6'>for the past nine years, i&apos;ve been pursuing careers in the software development space. what started off as taking a job to make sure i could eat that month, turned into an unexpected journey through the south&apos;s silicon valley. during my tenure at waitr turned asap, i had a unique opportunity to go from food delivery driver to junior software developer. those 3.5 years went by rapidly; i learned how fast business changes while working in a startup, how valuable it is to think on your feet, what it means to really dig into processes to weed out the inefficiencies, and probably the most fun of all, contribute to a growing product with some of the most hardworking people i&apos;ve ever met.</p>
          <p className='text-lg dark:text-indigo-50 mt-6'>after leaving waitr for other opportunities, i pursued other startups, consulting agencies, and even a construction corporation in need of a full stack developer. while i loved my time at these companies, i&apos;ve rarely been able to find a sense of purpose. do i love coding? yes. do i want to make a career out of it? to be transparent, no, not anymore. what i&apos;ve found out in the couple of years while being a scrum master is that i work best when i get to help build up a group of people. my heart is with helping people whether that&apos;s running a project, consulting on an issue, or walking somebody through a process that&apos;s a little daunting. when mr. rogers said look for the helpers, i took that to heart.</p>
          <p className='text-lg dark:text-indigo-50 mt-6'>i used to joke a couple of years ago that i would never use my degree again. i graduated with a degree in child and family studies, which translates to social work. after trying it on for size as an office manager for a psychiatrist, an ABA therapist for children with autism, and a traveling case manager, i had to put my mental health first. burn out is real, but, i believe it&apos;s 100% in my DNA to help others. that has never faded despite taking a grand leap out of that field. however, stepping into the scrum master role which also required project and program management as well as employee engagement solidified that i needed to make a shift back to the core of social work which is building community. while i actively re-enter the job market, i have hope that there is a home where i will be able to ignite change, bring to life an initiative, and build up individuals to show up authentically.</p>
          <p className='text-lg dark:text-indigo-50 mt-6'>l&apos;ache pas, kelli landry, updated 24 june 2024</p>
          </article>
        </section>
    </div>
  )
}
