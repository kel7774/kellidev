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
            <p className='text-lg dark:text-indigo-50 mt-6'>in december of 2012, i walked across the graduation stage with a degree in child &amp; family studies from ull fully intent on pursuing a dream of helping people as a social worker. for 4 years, i pursued different opportunities to see what would fit. i was a state social worker, case manager for a federal grant, office manager for a psychiatric practice, and an ABA therapist. like many careers that require heavy mental load, burn out became inevitable, so i decided to take a break. in 2016, my plan was to find a simple job for the in-between while i searched for my next opportunity in social work. i found a tech startup for food delivery, and started driving full time. over three years went by, and i took on many positions that spanned multiple departments. by far the most challenging and fulfilling was in engineering. in 2018, i began a software development bootcamp while working full time as a quality assurance analyst. after completion, i became a junior developer.</p>
            <p className='text-lg dark:text-indigo-50 mt-6'>for almost about 4 years, i pursued careers in software development. what was once a job to get groceries in my pantry became a journey into the south&apos;s silicon valley. at waitr, i was able to dip my toe into what it means to work in tech, and continued being mentored by senior developers. i continued to take opportunities in tech that spanned multiple industries &amp; companies - construction at turner, logisitics at gophr, hospitality at waitr, and consulting at CGI federal. while i loved coding and figuring things out, i had to hold myself accountable. i wasn&apos;t happy at all. coding is one of my hobbies, i love building personal projects, but i ultimately do not want to pursue a career in it. this hurt to admit. i spent so much time studying, getting mentored, spinning up practice projects, and trying very hard at the companies i worked at when all i really wanted to do was just talk to people.</p>
            <p className='text-lg dark:text-indigo-50 mt-6'>for all the reasons i loved being a developer, my true passion is helping others. in whatever way that translates to what i&apos;m doing, i took mr. roger&apos;s words seriously when he said that when disaster strikes, look for the helpers. since 2022, i have professionally been known as a scrum master, project manager, and program director. i&apos;ve helped teams and individuals get from a to b with what they&apos;re doing, and having fun along the way. what really matters most to me is genuine human connection and building trust over time. that&apos;s what&apos;s getting me up &amp; out of bed everyday. helping others. in 2025, i finally launched, after much fear &amp; doubt, a small venture to offer my services to others locally &amp; remotely with negotiable pricing that caters to building community over traditional pay structures.</p>
            <p className='text-lg dark:text-indigo-50 mt-6'>i used to joke a couple of years ago that i would never use my degree again. but, here i am, continuing to seek out roles and opportunities where i can relieve someone&apos;s stress, sift through the chaos, provide a little relief, or just watch their dog for an afternoon. my true goal is to find a way to help the many respected professionals in climate work discovering and implementing ways to save our planet, build resilient &amp; regenerative systems, and transition to a clean and circular economy. though i am no scientist, i believe that all major movements take all kinds whether it&apos;s saving a forest or making a flyer for earth day. it all matters, and i think you can about guess it -- i just wanna help.</p>
            <p className='text-lg dark:text-indigo-50 mt-6'>l&apos;ache pas, kelli landry, updated 18 oct 2025</p>
          </article>
        </section>
    </div>
  )
}
