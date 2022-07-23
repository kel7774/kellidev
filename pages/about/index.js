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
          <p className='text-lg dark:text-indigo-50'>hey y&apos;all! my name&apos;s kelli landry. 👆 that&apos;s me! thanks for droppin&apos; in! hope you like lowercase and emojis 😇</p>
          <p className='text-lg dark:text-indigo-50 mt-6'>first impressions are everything, right? so, i&apos;m a <a href='https://www.wizardingworld.com/collections/hufflepuff' target='_blank' rel='nooopener noreferrer'>hufflepuff</a>, an <a href='https://www.16personalities.com/enfj-personality' target='_blank' rel='nooopener noreferrer'>enfj-a</a>, jim from the office according to buzzfeed & was once described by a former boss as the 🦄 unicorn extrovert among our team of developers and managers. i&apos;ve worked for two successful startups, survived a pandemic and two furloughs, completed a boot camp in 8 months while working a full time job, and have recently learned how to swim laps. my goal is to work in tech, building tools to make life easier. i&apos;m a tenacious learner, and have a long, yet exciting journey ahead of me. thanks for stopping by, and connect with me on linkedin if you want to say hi!</p>
          </article>
        </section>}
      {hidden &&
        <section className='text-left px-28 py-20 xs:px-14 xs:py-14 text-2xl xl:px-96 2xl:px-96 lg:px-72'>
            <div className='w-full flex justify-center mb-6'>
              <Image src={Kelli_Sailor} alt='Kelli Landry Profile' height='400' width='400' objectFit='cover' className='rounded-full shadow-circle' />
            </div>
            <article>
              <p className='text-lg dark:text-indigo-50 mt-6'>hey there! my name is kelli landry, and 👆 that&apos;s me. i don&apos;t use capital letters & use emojis rather frequently. my english teacher wouldn&apos;t approve, but her favorite books were anything by ayn rand, so there ya go.</p>
              <p className='text-lg dark:text-indigo-50 mt-6'>first impressions are everything, so i&apos;ll formally introduce myself as a <a href='https://www.wizardingworld.com/collections/hufflepuff' target='_blank' rel='nooopener noreferrer'>hufflepuff</a> (though i&apos;ve tested for <a href='https://www.wizardingworld.com/collections/ravenclaw' target='_blank' rel='nooopener noreferrer'>ravenclaw</a> in the past, a very ravenclaw thing to point out), an enfj-a, and surprisingly tested as jim from the office, but if we&apos;re being honest, i&apos; clearly an angela. one of my former bosses once told me that i was the 🦄 unicorn extrovert on our team. he wasn&apos;t wrong. i love to talk. i love people. my friend once asked me how i do that conversing thing so easily, and much like elizabeth bennett, i just said, &quot;with practice&quot;. </p>
              <p className='text-lg dark:text-indigo-50 mt-6'>so here&apos;s the deal: i have a weird journey. i often ask myself, &quot;what&apos;s a place like you doing in a girl like this?&quot; 🤷🏻‍♀️ (the mummy, anyone?) i used to be a social worker. i went to school with the intention of finding a career centered around helping others. for three years, i tried that on for size, but by 2016, i was burnt out. that&apos;s when i found tech. to be fair, it kinda found me.</p>
              <p className='text-lg dark:text-indigo-50 mt-6'>let&apos;s go all the way back to 2000. y2k baby! remember when everyone was really into myspace layouts? i was the kid that did that <em>before</em> it was cool. from 2000-2005, i was using FTP on my very own hosted website. i was writing pretty janky HTML, styling marquees with CSS, and using my website as an online diary. yes, 🤢 trés cringe. but, i remembered how much fun i had doing that when i began working for a tech startup. i made my way through several different positions there, and landed in engineering doing manual testing. but, i wanted more. i wanted to style some marquees, damnit!</p>
              <p className='text-lg dark:text-indigo-50 mt-6'>here&apos;s the thing. it&apos;s been a rough road. tech is hard. in 2018, i put myself in an intense web development boot camp after my boss & coworkers pushed me to take the leap. i worked full time while completing it, moved twice during the process 😰, and slept at the office too many nights to keep track of. when i finally finished it, i was assigned a project to build with a senior developer. we spent about 6 months building it. it was my first project that i got to contribute to, and even though it never launched, i&apos;m still proud of it.</p>
              <p className='text-lg dark:text-indigo-50 mt-6'>i needed to land at a place that felt familiar, but was open to hiring someone with very little experience. that&apos;s when i went to gophr. those were some of the most hardworking, sleep-deprived, intense, yet fulfilling months of my life. i got to experiment with different tech & got introduced to mobile development. unfortunately, march of 2020 did its thing. almost everyone got furloughed. i didn&apos;t know where to go with my limited experience, and needed money fast. i spent the next ~6 months helping my friend run her warehouse. it was exhausting, and while i was hustling 💪, my devotion to learning took a backseat. (if i&apos;m being really honest, it wasn&apos;t even on my radar. i was just trying to eat.)</p>
              <p className='text-lg dark:text-indigo-50 mt-6'>eventually, i found a position through a consulting company, but it wasn&apos;t the right fit. i needed to work on a product from end-to-end, and after jumping around from contract to contract, i saw that my level of experience wasn&apos;t helping me. there was so much to learn, and not enough time to learn it. i started developing at another company with several talented & intelligent individuals, but once again, didn&apos;t strike gold. it was a learning experience, and i picked up a little c#, got certified as a scrum master, and refactored a small project. towards the end, i saw my weaknesses, and had to address them, and that&apos;s where my new journey 🧘🏻‍♀️ begins.</p>
              <p className='text-lg dark:text-indigo-50 mt-6'>so, why be so candid? it&apos; been humbling to look at myself since i finished this boot camp in 2019 and to measure all of my progress. i made this website with no help besides google and stackoverflow. my friend needed a website so people could request songs at his show, and i built an mvp after fighting with database stuff that i had no clue about. i even built a pokedex (a rolodex for pokemon) as part of an interview, and i&apos;m still proud of that.</p>
              <p className='text-lg dark:text-indigo-50 mt-6'>but. i&apos;m still in the infancy of this career. there&apos;s so much to learn, and imposter syndrome is a monster 🎭. one of my mentors from a previous job said that i need to get out of my own way. part of doing that is fully immersing myself in what i have struggled with in the past few years. it feels like playing catch up constantly. most of my days are spent practicing solving data algorithms, studying data structures, and really diving back into the fundamentals. (i&apos;ve never done a graduate program, but i currently feel like a computer science 🤓 major.) getting a solid grip on those in the past few months has really excelled me in my skills. it can be incredibly grueling to do this everyday, but i want to build useful tools. i want to get shit done! the hard part is putting in the work.</p>
              <p className='text-lg dark:text-indigo-50 mt-6'>if you&apos;ve stuck around this far, i applaud you. after this last job, i promised myself that i would be more of myself 🤸‍♀️ which includes transparency. what i&apos;m hoping this website can be is a constant challenge for me in both improving it, showcasing the projects i&apos;m challenging myself with, and to talk more about things i want to talk about -- like tailwind vs. styled-components, just what is a closure, how much recursion confuses me, or about trying my hand at learning sql.</p>
              <p className='text-lg dark:text-indigo-50 mt-6'>i heard something on tiktok a while back about how repetition is overrated, and it didn&apos;t sink in at the time. the place i&apos;m at now has really burned this into my heart. doing something over & over again with intention, humility, and persistence will bring that shiny result of success. not a lot of people see the hard parts -- me writing the same code to 🛠 build a linked list or trying to loop through arrays or making several &apos;Hello World&apos; apps, because frankly, it&apos;s not sexy. but it&apos;s exactly those types of tasks that build your skills up for when you&apos;re building something at your dream job. that is my mantra, and in the meantime, i&apos;ll be 🔮 dreaming big.</p>
            </article>
        </section>}
    </div>
  )
}
