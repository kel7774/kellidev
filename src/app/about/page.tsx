import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-cabinet font-bold mb-12 text-center">
          About <span className="text-frog-green">Me</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-frog-green">
              <Image
                src="/images/about_photo.jpg"
                alt="Kelli Landry"
                width={320}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex-grow space-y-6">
            <p className="text-lg font-geist leading-relaxed">
              Hey! My name&apos;s Kelli Landry.
            </p>

            <p className="text-lg font-geist leading-relaxed">
              First impressions are everything so, I&apos;m a <a className='font-bold' href='https://www.wizardingworld.com/collections/hufflepuff' target='_blank' rel='nooopener noreferrer'>Hufflepuff</a>, an <a className='font-bold' href='https://www.16personalities.com/infj-personality' target='_blank' rel='nooopener noreferrer'>INFJ-T</a>, & was once described by a former boss as the 🦄 unicorn extrovert among our team of developers.
            </p>

            <p className="text-lg font-geist leading-relaxed">
              In December of 2012, I walked across the graduation stage with a degree in Child &amp; Family Studies from ULL fully intent on pursuing a dream of helping people as a social worker. For 4 years, I pursued different opportunities to see what would fit. I was a state social worker, case manager for a federal grant, office manager for a psychiatric practice, and an ABA therapist. Like many careers that require heavy mental load, burn out became inevitable, so I decided to take a break. In 2016, my plan was to find a simple job for the in-between while I searched for my next opportunity in social work. I found a tech startup for food delivery, and started driving full time. Over three years went by, and I took on many positions that spanned multiple departments. By far the most challenging and fulfilling was in engineering. In 2018, I began a software development bootcamp while working full time as a quality assurance analyst. After completion, I became a junior developer.
            </p>

            <p className="text-lg font-geist leading-relaxed">
              For almost about 4 years, I pursued careers in software development. What was once a job to get groceries in my pantry became a journey into the South&apos;s Silicon Valley. At Waitr, I was able to dip my toe into what it means to work in tech, and continued being mentored by senior developers. I continued to take opportunities in tech that spanned multiple industries &amp; companies - construction at Turner, logistics at Gophr, hospitality at Waitr, and consulting at CGI Federal. While I loved coding and figuring things out, I had to hold myself accountable. I wasn&apos;t happy at all. Coding is one of my hobbies, I love building personal projects, but I ultimately do not want to pursue a career in it. This hurt to admit. I spent so much time studying, getting mentored, spinning up practice projects, and trying very hard at the companies I worked at when all I really wanted to do was just talk to people.
            </p>

            <p className="text-lg font-geist leading-relaxed">
              For all the reasons I loved being a developer, my true passion has always been helping others. I took Mr. Roger&apos;s words seriously when he said that when disaster strikes, look for the helpers. Since 2022, I have professionally been known as a scrum master, project manager, and program director. I&apos;ve helped teams and individuals get from a to b with what they&apos;re working to accomplish, and having fun along the way. What really matters most to me is genuine human connection and building trust over time. That&apos;s what&apos;s getting me up &amp; out of bed everyday. Helping others. In 2025, I finally launched, after much fear &amp; doubt, a small venture to offer my services to others locally &amp; remotely with negotiable pricing that caters to building community over traditional pay structures.
            </p>

            <p className="text-lg font-geist leading-relaxed">
              I used to joke a couple of years ago that I would never use my degree again, but, here I am, continuing to seek out roles and opportunities where I can relieve someone&apos;s stress, sift through the chaos, provide a little relief, or just watch their dog for an afternoon. My true goal is to find a way to help the many respected professionals in climate work discovering and implementing ways to save our planet, build resilient &amp; regenerative systems, and transition to a clean and circular economy. Though I am no scientist, I believe that all major movements take all kinds whether it&apos;s saving a forest or making a flyer for Earth Day. It all matters, and I think you can probably guess what I want to do -- I just wanna help.
            </p>

            <p className="text-lg font-geist leading-relaxed">
              L&apos;ache pas, Kelli Landry, Updated 18 Oct 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}








/* import Image from 'next/image'
import { NextSeo } from 'next-seo'

import Kelli_Profile from '../../public/kelli_smile.png'

export default function About () {
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

            <p className='text-lg dark:text-indigo-50 mt-6'>for all the reasons i loved being a developer, my true passion has always been helping others. i took mr. roger&apos;s words seriously when he said that when disaster strikes, look for the helpers. since 2022, i have professionally been known as a scrum master, project manager, and program director. i&apos;ve helped teams and individuals get from a to b with what they&apos;re working to accomplish, and having fun along the way. what really matters most to me is genuine human connection and building trust over time. that&apos;s what&apos;s getting me up &amp; out of bed everyday. helping others. in 2025, i finally launched, after much fear &amp; doubt, a small venture to offer my services to others locally &amp; remotely with negotiable pricing that caters to building community over traditional pay structures.</p>

            <p className='text-lg dark:text-indigo-50 mt-6'>i used to joke a couple of years ago that i would never use my degree again. but, here i am, continuing to seek out roles and opportunities where i can relieve someone&apos;s stress, sift through the chaos, provide a little relief, or just watch their dog for an afternoon. my true goal is to find a way to help the many respected professionals in climate work discovering and implementing ways to save our planet, build resilient &amp; regenerative systems, and transition to a clean and circular economy. though i am no scientist, i believe that all major movements take all kinds whether it&apos;s saving a forest or making a flyer for earth day. it all matters, and i think you can about guess it -- i just wanna help.</p>

            <p className='text-lg dark:text-indigo-50 mt-6'>l&apos;ache pas, kelli landry, updated 18 oct 2025</p>
          </article>
        </section>
    </div>
  )
}
 */