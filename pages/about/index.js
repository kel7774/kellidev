import { useState } from 'react'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'

const Divider = styled.div`
  height: .3rem;
  width: 20rem;
  background-color: #e0e7ff;
  margin: 1rem;
  display: flex;
  justify-content: center;
`;

export default function About () {
  const [hidden, setHidden] = useState(false)
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
        <button className='xs:mr-1 mt-8 mr-8 border-2 rounded-2xl p-3 w-36 border-indigo-500 dark:hover:border-indigo-800 bg-indigo-500 dark:bg-indigo-800 text-white font-bold uppercase tracking-widest hover:bg-indigo-300 dark:hover:bg-indigo-500 hover:text-gray-900 dark:hover:text-indigo-100' onClick={showShort}>short</button>
        <button className='xs:mr-1 mt-8 mr-8 border-2 rounded-2xl p-3 w-36 border-indigo-500 dark:hover:border-indigo-800 bg-indigo-500 dark:bg-indigo-800 text-white font-bold uppercase tracking-widest hover:bg-indigo-300 dark:hover:bg-indigo-500 hover:text-gray-900 dark:hover:text-indigo-100' onClick={showLong}>long</button>
      </nav>
      {!hidden &&
        <section className='text-left xs:px-14 xs:py-14 px-28 py-20'>
          <article>
            <h1 className='text-4xl text-indigo-600 dark:text-indigo-200 underline mb-6 '>short & sweet</h1>
          <p className='text-2xl dark:text-indigo-50'>hi! my name is kelli landry. thanks for droppin&apos; in! first off, i swear i know how to use capital letters; settle into the chill of lowercase 🏄🏻‍♀️</p>
          <p className='text-2xl dark:text-indigo-50 mt-6'>i&apos;m a former social worker turned front-end web developer. in 2018, i started my tech journey at a louisiana-based startup. from there, i&apos;ve been living life at rocket speed! my ultimate career goal is to be a badass full-stack developer. when i&apos;m not learning something on udemy, perusing stackoverflow, or trying out some new software, i enjoy reading in my hammock, camping, dancing, playing pool, karaoke, live music, learning spanish & french on duolingo, and visiting with friends.</p>
          </article>
        </section>}
      {hidden &&
        <section className='text-left px-28 py-20 xs:px-14 xs:py-14 text-2xl'>
          <article>
            <h1 className='text-4xl text-indigo-600 dark:text-indigo-200 underline mb-6'>long-winded</h1>
            <h3 className='text-2xl text-indigo-600 my-3 dark:text-indigo-200 font-semibold'>welcome in! where&apos;s your seatbelt?</h3>
          <p className='dark:text-indigo-50'>hello! my name is kelli landry! thanks for coming along for the ride. first off, i swear i know how to capitalize. but i like the chill factor associated with lowercase 😎 anyway, you&apos;re here for the long version, so come on in; it&apos;s kinda bumpy.</p>
          </article>
          {/* <Divider/> */}
          <article>
            <h3 className='text-2xl text-indigo-600 dark:text-indigo-200 font-semibold my-3'>feel the burn(out)</h3>
            <p className=' dark:text-indigo-50'>back in 2012, i graduated with a degree in child and family studies from the university of louisiana at lafayette. my intentions, goals, and dreams were first and foremost about helping people. i spent about ~3.5 years in the field working in various positions that included federal grants, a case management agency, autism spectrum therapy, and even office management for a psychiatrist. all of these paths stretched me in everyway possible. the industry of helping folks is a complicated, beautiful, and exhausting endeavor. i chose to walk away after experiencing burnout, and in early 2016, i sought something completely different.</p>
          </article>
          {/* <Divider/> */}
          <article>
            <h3 className='text-2xl text-indigo-600 my-3 dark:text-indigo-200 font-semibold'>hi, thanks for choosing waitr</h3>
            <p className=' dark:text-indigo-50'>i walked into waitr as a driver in february of 2016. in about 3 months, i had moved up to a tech driver where i worked on call to fix various issues with ipads at restaurants. eventually as the business grew, i installed new restaurants, trained staff, and even trained drivers. around june of 2016, waitr was growing faster, and needed more hands on customer support. i jumped in headfirst into a startup culture making it up as time passed.</p>
          </article>
          {/* <Divider/> */}
          <article>
            <h3 className='text-2xl text-indigo-600 my-3 dark:text-indigo-200 font-semibold'>enter the thunderdome</h3>
            <p className='dark:text-indigo-50'>in early 2017, waitr was releasing a new version of their apps, website, and internal dashboard. v1 to v2, baby & it was going to be <em>stellar</em>. with almost no training or documentation on changes until less than 24 hours before release, i walked into the office at 7am that day to prepare for what was to come. customer support would likely get all kinds of feedback should bugs occur during the release. 8am. boom. v2 released. and what can i do but be honest here? it was pure chaos. things were breaking, customers were upset, and we were doing everything we could to just put out the fires. the engineering team needed some support on tracking bugs, and i took it upon myself to represent the team and report to the various developers. this process wasn&apos;t pretty, but it worked. i filled out bug reports, tried to reproduce the issues, communicated as a liason between support and engineering, and eventually, at 7pm, left feeling drained, but accomplished. over the next few weeks as bugs were being squashed, i volunteered my time to manually fix issues with instructions from one of the founding developers. this gave me a new insight into what it means to develop. and from there, i just wanted to know more.</p>
          </article>
          {/* <Divider/> */}
          <article>
            <h3 className='text-2xl text-indigo-600 my-3 dark:text-indigo-200 font-semibold'>omg, please help</h3>
            <p className=' dark:text-indigo-50'>around april of 2017, the head of engineering pulled me into a meeting by surprise. it was a tuesday (i&apos;m actually not sure, but i&apos;ve always wanted to say that). i was about to ask him if he could move to another room since i had to train a group of new driver hires. he said, &apos;sure & ya know, we could use some manual qa on our team. after this release, we decided we needed someone dedicated to this. you really stood out. how &apos;bout it?&apos; (or something like that; just know, it was an offer). i honestly didn&apos;t know what to say other than yes. they took me in with almost no coding experience, and that&apos;s when my life quite literally changed.</p>
          </article>
          {/* <Divider/> */}
          <article>
            <h3 className='text-2xl text-indigo-600 my-3 dark:text-indigo-200 font-semibold'>so i found this bug, right?</h3>
            <p className='dark:text-indigo-50'>over the next year, i started to dive into qa. making processes, adding documentation where it lacked, reporting to different teams with my findings, working with the product owner to flesh out various concepts, experimenting with github & jira, to asking questions about the tech industry. daily standups were particularly challenging. i was on a team full of talented developers, and i very much stuck out as a wildcard. talking to people about their software breaking was not my favorite task. i was testing, but truthfully, this tested me. i found out how hard it is to enter the tech industry with no experience. i didn&apos;t want that to stop me, so i started wondering what it meant to be on the other side. i wanted to build.</p>
          </article>
          {/* <Divider/> */}
          <article>
            <h3 className='text-2xl text-indigo-600 my-3 dark:text-indigo-200 font-semibold'>put me in, chief</h3>
            <p className='dark:text-indigo-50'>after talking to a couple of my co-workers, i started researching web development bootcamps. after much consideration, and cost analysis, i decided on bloc.io (now thinkful). on june 4, 2018, i started my journey. this was a particularly strenuous time in my life where i learned much about discipline, time management, research, and autonomy. thankfully i was able to complete this program in february of 2019 with the support of my supervisor and co-workers. i was immediately given a project to develop a seed website for a social justice initiative. right up my alley, tbh. it took about 6 months from receiving the wireframes and design, to connecting various components to api&apos;s. but i did it with the help of a lead developer, and it went live.</p>
          </article>
          {/* <Divider/> */}
          <article>
            <h3 className='text-2xl text-indigo-600 my-3 dark:text-indigo-200 font-semibold'>just gophr it</h3>
            <p className=' dark:text-indigo-50'>eventually around september 2019, i wanted to be challenged even more as a developer, and i heard of a new startup in the area. gophr, inc. the orange enigma. it turns out they were looking for a developer with experience in react and front end technologies, and i jumped at the chance of building something from the ground up. i joined the team and immediately dove into helping build an internal dashboard, and in a few months, i was taking courses on react native to build a client app to manage customer orders. it was a whirlwind. 2020 hit gophr hard, and eventually, i had to figure something out.</p>
          </article>
          {/* <Divider/> */}
          <article>
            <h3 className='text-2xl text-indigo-600 my-3 dark:text-indigo-200 font-semibold'>on the hunt again</h3>
            <p className=' dark:text-indigo-50'>during those months between august 2020 - december 2020, i was grateful to be a part of my friend&apos;s business, cajun crate. i managed a warehouse by myself full-time while she sought out someone permanent. while i missed developing, and came home exhausted every night, i came out of that experience with an appreciation for all careers, skill and education levels. it took many months to find the right fit, and many interviews where i saw areas i needed to improve. finally, in december of 2020, i was offered an associate technical consultant position at perficient and started at the beginning of 2021.</p>
          </article>
          {/* <Divider/> */}
          <article>
            <h3 className='text-2xl text-indigo-600 my-3 dark:text-indigo-200 font-semibold'>the things you don&apos;t know</h3>
            <p className=' dark:text-indigo-50'>being at perficient opened my mind and exposed many areas that i needed to improve on both from a technical and professional perspective. i took advantage of the qa workshop perficient facilitated to learn more about the programmatic side of qa and testing. it stretched me as a developer by showing where my various coding projects fell short. they also have provided me with a platform to keep learning, and i received 3 certificates of completion in areas i deemed necessary to fill specific knowledge gaps. being self taught is difficult without some fundamentals. all of this was self-motivated, and being there taught me more about becoming a more well-rounded developer.</p>
          </article>
          {/* <Divider/> */}
          <article>
            <h3 className='text-2xl text-indigo-600 my-3 dark:text-indigo-200 font-semibold'>clean slate, fresh start</h3>
            <p className='dark:text-indigo-50'>starting in september of 2021, i received a job offer from turner industries. this came after a couple of months of continuous dialogue with their supervisor and a handful of the team. as much as consulting taught me, i really did need to get back on a product team that focuses on developing something over a long period of time. my interest will continue to grow as a developer, with a focus on becoming more proficient on the backend. this company has invested in me, even though i still believe my skill level needs improvement. my motivation comes from my desire to be better, and my goal of becoming a full stack engineer is supported by this company. this was about 80% of the reason behind choosing them, that & their culture is amazing, and the company is louisiana-owned. here&apos;s to the new journey!</p>
          </article>
        </section>}
    </div>
  )
}
