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

  return (
    <div className='flex flex-col justify-center'>
      <NextSeo
        title='Kelli Landry - About'
        description='An about page about Kelli Landry with an option for a short or long bio.'
        canonical='http://kellilandry.dev/about'
      />
      <nav className='flex flex-row justify-center'>
        <button className='xs:mr-1 mt-8 mr-4 p-3 w-36 border-indigo-500 dark:border-indigo-800 dark:hover:border-indigo-400 bg-indigo-500 dark:bg-indigo-800 text-white tracking-widest hover:bg-indigo-300 hover:border-indigo-300 dark:hover:bg-indigo-400 hover:text-gray-900 dark:hover:text-gray-900 duration-200 ease-in aboutButtonBoxShadow uppercase' onClick={showShort}>short</button>
        <button className='xs:mr-1 mt-8 ml-4 p-3 w-36 border-indigo-500 dark:border-indigo-800  dark:hover:border-indigo-400 bg-indigo-500 dark:bg-indigo-800 text-white tracking-widest hover:bg-indigo-300 dark:hover:bg-indigo-400 hover:border-indigo-300 hover:text-gray-900 dark:hover:text-gray-900 duration-200 ease-in aboutButtonBoxShadow uppercase' onClick={showLong}>long</button>
      </nav>
      {!hidden &&
        <section className='text-left xs:px-14 xs:py-14 px-28 py-20 xl:px-96 2xl:px-96 lg:px-72'>
          <article>
            <div className='w-full flex justify-center mb-6'>
              <Image src={Kelli_Profile} alt='Kelli Landry Profile' height='400' width='400' objectFit='cover' className='rounded-full shadow-circle' />
            </div>
          <p className='text-lg dark:text-indigo-50'>hey y&apos;all! my name&apos;s kelli landry. 👆 that&apos;s me!  thanks for droppin&apos; in! hope you like lowercase and emojis 😇</p>
          <p className='text-lg dark:text-indigo-50 mt-6'>first impressions are everything, right? so, i&apos;m a <a href='https://www.wizardingworld.com/collections/hufflepuff' target='_blank' rel='nooopener noreferrer'>hufflepuff</a>, an <a href='https://www.16personalities.com/enfj-personality' target='_blank' rel='nooopener noreferrer'>enfj-a</a>, jim from the office according to buzzfeed & was once described by a former boss as the 🦄 unicorn extrovert among our team of developers and managers.</p>
          <p className='text-lg dark:text-indigo-50 mt-6'>what&apos;s a place like me doing in a girl like this? (the mummy... anyone?) well, i used to be a social worker. in 2016, burn out got the best of me. helping people is tough 🤕. i started working for a tech startup, & kept growing. fast forward to now, and i&apos;m still learning. i&apos;ve had <em>many</em> set backs since finishing boot camp in 2019. i&apos;ve survived two furloughs, hustling in a warehouse for 6+ months to get by, losing valuable time to devote to coding, & trying to find the right fit for a junior developer. but, in the meantime i made this website as well as a functional tool for a friend. it hasn&apos;t all been completely wasted, but i have <em>a ton</em> to learn. i still have hope that i can one day be a badass full stack engineer. my approach now is one of not only tenacity, but humility.</p>
          </article>
        </section>}
      {hidden &&
        <section className='text-left px-28 py-20 xs:px-14 xs:py-14 text-2xl xl:px-96 2xl:px-96 lg:px-72'>
            <div className='w-full flex justify-center mb-6'>
              <Image src={Kelli_Sailor} alt='Kelli Landry Profile' height='400' width='400' objectFit='cover' className='rounded-full shadow-circle' />
            </div>
            <article>
              <p className='text-lg dark:text-indigo-50 mt-6'>hey there! my name is kelli landry, and 👆 that&apos;s me. i don&apos;t use capital letters & use emojis rather frequently. my english teacher wouldn&apos;t approve, but her favorite books were anything by ayn rand, so there ya go.</p>
              <p className='text-lg dark:text-indigo-50 mt-6'>first impressions are everything, so i&apos;ll formally introduce myself as a <a href='https://www.wizardingworld.com/collections/hufflepuff' target='_blank' rel='nooopener noreferrer'>hufflepuff</a> (though i&apos;ve tested for <a href='https://www.wizardingworld.com/collections/ravenclaw' target='_blank' rel='nooopener noreferrer'>ravenclaw</a> in the past, a very ravenclaw thing to point out), an enfj-a, and surprisingly tested as jim from the office, but if we&apos;re being honest, angela is more my speed. one of my former bosses once told me that i was the 🦄 unicorn extrovert on our team. he wasn&apos;t wrong. i love to talk. i love people. my friend once asked me how i do that conversing thing so easily, and much like elizabeth bennett, i just said, &quot;with practice&quot;. </p>
              <p className='text-lg dark:text-indigo-50 mt-6'>so here&apos;s the deal: i have a weird journey. i often ask myself, &quot;what&apos;s a place like you doing in a girl like this?&quot; (the mummy, anyone?) i used to be a social worker. i went to school with the intention of finding a career centered around helping others. for three years, i tried that on for size, but by 2016, i was burnt out. that&apos;s when i found tech. or to be very john hughes with it, tech found me.</p>
              <p className='text-lg dark:text-indigo-50 mt-6'>let&apos;s go all the way back to 2000. y2k baby! remember when everyone was really into myspace layouts? i was the kid that did that <em>before</em> it was cool. from 2000-2005, i was using FTP on my very own hosted website. i was writing pretty janky HTML, styling marquees with CSS, and using my website as an online diary. yes, 🤢 trés cringe. but, i remembered how much fun i had doing that when i started working for a startup. i made my way through several different positions there, and landed in engineering doing manual testing. but, i wanted more. i wanted to style some marquees, damnit!</p>
              <p className='text-lg dark:text-indigo-50 mt-6'>here&apos;s the thing. it&apos;s been a rough road. tech is hard. in 2018, i put myself in an intense web development boot camp after my boss & coworkers pushed me to take the leap. i worked full time while completing it, moved twice during the process, and slept at the office too many nights to keep track of. when i finally finished it, i was assigned a project to build with a senior developer. we spent about 6 months building it. it was my first project that i got to contribute to, and even though it never launched, i&apos;m still proud of it.</p>
              <p className='text-lg dark:text-indigo-50 mt-6'>i needed to land at a place that felt familiar, but was open to hiring a noob. that&apos;s when i went to gophr. those were some of the most hardworking, sleep-deprived, intense, yet fulfilling months of my life. i got to experiment with different tech & got introduced to mobile development. unfortunately, march of 2020 did its thing. almost everyone got furloughed. i didn&apos;t know where to go with my limited experience, and needed money fast. i spent the next 6ish months helping my friend run her warehouse. it was exhausting, and while i was hustling 💪, my devotion to learning & staying relevant took the bronze. (if i&apos;m being really honest, it wasn&apos;t even on my radar. i was just trying to eat.)</p>
              <p className='text-lg dark:text-indigo-50 mt-6'>eventually, i found a position through a consulting company, but long story short, it wasn&apos;t the right fit. i needed to work on a product from end-to-end, and after jumping around from contract to contract, i saw that my level of experience wasn&apos;t helping me. there was so much to learn, and not enough time to learn it. i landed at another company with several talented & intelligent individuals, but once again, didn&apos;t strike gold. i needed to contribute to projects, but with very little tools in my toolbox, i wasn&apos;t returning on their investment with contributions to the source code.</p>
              <p className='text-lg dark:text-indigo-50 mt-6'>so, why be so candid? am i not shooting myself in the foot with this level of honesty? maybe. possibly. probably. but, i&apos;m an individual much like hermione granger in that i <em>will</em> tell it like it is, even when my magical bffs don&apos;t wanna hear it. (we love a self-aware queen 👑.) it&apos; been humbling to look at myself since i finished this boot camp in 2019 and to measure all of my progress. i made this website with no help besides google and stackoverflow. my friend needed a website so people could request songs at his show, and i built an mvp after fighting with database stuff that i had no clue about. i even built a pokedex (a rolodex for pokemon) as part of an interview, and i&apos;m still proud of that.</p>
              <p className='text-lg dark:text-indigo-50 mt-6'>but. i&apos;m still in the infancy of this career. there&apos;s so much to learn, and imposter syndrome is a monster 🎭. one of my mentors from a previous job said that i need to get out of my own way. part of doing that is fully immersing myself in what i have struggled with in the past four years. it feels like playing catch up constantly. there&apos;s basics that i need to master, and challenges that i owe to myself to attempt in order to become a developer that can work [for the most part] independently.</p>
              <p className='text-lg dark:text-indigo-50 mt-6'>if you&apos;ve stuck around this far, i applaud you. this wasn&apos;t as light as i wanted it to be. but, after this last job, i promised myself that i would be more of myself 🤸‍♀️ which includes transparency. i don&apos;t want any company, startup, or person to have any doubts about my abilities or lack thereof anymore. what i&apos;m hoping this website can be is a constant challenge for me in both improving it, showcasing the projects i&apos;m challenging myself with, and to talk more about things i want to talk about instead of making assumptions about what someone wants to read.</p>
              <p className='text-lg dark:text-indigo-50 mt-6'>in spite of all of my setbacks, i still have a strong desire to become a badass full stack engineer. i realize that this goal will take many years to reach, but i never lost my tenacity. i just needed a little humility along the way. i hope that someone can get something out of my journey. tech is hard, but it&apos;s not insurmountable. cheers from my desk in lafayette. now, i gotta go build something!</p>
            </article>
        </section>}
    </div>
  )
}
