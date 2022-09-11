import React from 'react'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

import Kelli_Profile from '../../public/kelli_smile.png'
import Kelli_Sailor from '../../public/sailor_kelli.png'

export default function About () {
  const [hidden, setHidden] = React.useState(false)

  const showLong = () => {
    setHidden(true)
  }

  const showShort = () => {
    setHidden(false)
  }

  const showShortest = () => {
    setHidden(false);
  }

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
          <p className='text-lg dark:text-indigo-50 mt-6'>first impressions are everything soooooo, i&apos;m a <a href='https://www.wizardingworld.com/collections/hufflepuff' target='_blank' rel='nooopener noreferrer'>hufflepuff</a>, an <a href='https://www.16personalities.com/enfj-personality' target='_blank' rel='nooopener noreferrer'>enfj-a</a>, jim from the office according to buzzfeed & was once described by a former boss as the 🦄 unicorn extrovert among our team of developers. i&apos;ve worked for two startups, survived a pandemic and two furloughs, completed a boot camp in 8 months while working a full time job, and can swim 3000 yards in about 2 hours. my goal is to work in tech, building tools to make life easier. i&apos;m pretty tenacious & my goal is to be a full stack developer in the next five years. my strong areas are anything javascript, but i have a long way to go to consider myself an expert. currently, i am focusing on my role as a devops engineer & scrum master @ CGI.</p>
          <p className='text-lg dark:text-indigo-50 mt-6'>starting from social worker to software developer has given me a lot of opportunity yet not without my fair share of struggle. after about 3 years in tech, i still feel like an imposter. the rough plan is to build & learn as much as i can to push through the doubt. so far, it&apos;s working.</p>
          </article>
        </section>
    </div>
  )
}
