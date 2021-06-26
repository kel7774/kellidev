import Layout from '../../layout/Layout'
import { useState } from 'react'
import { NextSeo } from 'next-seo'
import classes from '../../styles/About.module.css'

export default function About () {
  const [hidden, setHidden] = useState(false)
  const showLong = () => {
    setHidden(true)
  }
  const showShort = () => {
    setHidden(false)
  }
  return (
    <Layout>
      <NextSeo
        title='Kelli Landry - About'
        description='An about page about Kelli Landry with an option for a short or long bio.'
        canonical='http://kellilandry.dev/about'
      />
      <nav className={classes.nav}>
        <button onClick={showShort}>short</button>
        <button onClick={showLong}>long</button>
      </nav>
      {!hidden &&
        <section>
          <h1>short & sweet</h1>
          <p>hi! my name is kelli landry. thanks for droppin&apos; in! first off, i swear i know how to use capital letters. but, over here, i&apos;d rather not. let&apos;s get into it. back in 2012, i graduated in child and family studies. in 2018, i took a leap & started web development. it&apos;s been a challenging transition from fixing people to making programs, but i have found that i enjoy building applications and websites. i&apos;m currently challenging myself to become a full stack web developer, so i guess you can say that i live on udemy. aside from developing, i enjoy reading in my hammock, camping, dancing, playing pool, karaoke, live music, learning spanish & french on duolingo, and visiting with friends.</p>
        </section>}
      {hidden &&
        <section>
          <h2>long-winded</h2>
          <h3>welcome in! where&apos;s your seatbelt?</h3>
          <p>hello! my name is kelli landry! thanks for coming along for the ride. first off, i swear i know how to capitalize. but there&apos;s a freedom when you don&apos;t. anyway, you&apos;re here for the long version, so strap in; it&apos;s a little bumpy.</p>
          <h3>feel the burn(out)</h3>
          <p>back in 2012, i graduated with a degree in child and family studies from the university of louisiana at lafayette. my intentions, goals, and dreams were first and foremost about helping people. i spent about ~3.5 years in the field working in various positions that included federal grants, a case management agency, autism spectrum therapy, and even office management for a psychiatrist. all of these paths stretched me in everyway possible. the industry of helping folks is a complicated, beautiful, and exhausting endeavor. i chose to walk away after experiencing burnout, and in early 2016, i sought something completely different.</p>
          <h3>hi, thanks for choosing waitr</h3>
          <p>i walked into waitr as a driver in february of 2016. in about 3 months, i had moved up to a tech driver where i worked on call to fix various issues with ipads at restaurants. eventually as the business grew, i installed new restaurants, trained staff, and even trained drivers. around june of 2016, waitr was growing faster, and needed more hands on customer support. i jumped in headfirst into a startup culture making it up as time passed.</p>
          <h3>enter the thunderdome</h3>
          <p>in early 2017, waitr was releasing a new version of their apps, website, and internal dashboard. v1 to v2, baby & it was going to be <em>stellar</em>. with almost no training or documentation on changes until less than 24 hours before release, i walked into the office at 7am that day to prepare for what was to come. customer support would likely get all kinds of feedback should bugs occur during the release. 8am. boom. v2 released. and what can i do but be honest here? it was pure chaos. things were breaking, customers were upset, and we were doing everything we could to just put out the fires. the engineering team needed some support on tracking bugs, and i took it upon myself to represent the team and report to the various developers. this process wasn&apos;t pretty, but it worked. i filled out bug reports, tried to reproduce the issues, communicated as a liason between support and engineering, and eventually, at 7pm, left feeling drained, but accomplished. over the next few weeks as bugs were being squashed, i volunteered my time to manually fix issues with instructions from one of the founding developers. this gave me a new insight into what it means to develop. and from there, i just wanted to know more.</p>
          <h3>omg, please help</h3>
          <p>around april of 2017, the head of engineering pulled me into a meeting by surprise. it was a tuesday (i&apos;m actually not sure, but i&apos;ve always wanted to say that). i was about to ask him if he could move to another room since i had to train a group of new driver hires. he said, &apos;sure & ya know, we could use some manual qa on our team. after this release, we decided we needed someone dedicated to this. you really stood out. how &apos;bout it?&apos; (or something like that; just know, it was an offer). i honestly didn&apos;t know what to say other than yes. they took me in with almost no coding experience, and that&apos;s when my life quite literally changed.</p>
          <h3>so i found this bug, right?</h3>
          <p>over the next year, i started to dive into qa. making processes, adding documentation where it lacked, reporting to different teams with my findings, working with the product owner to flesh out various concepts, experimenting with github & jira, to asking questions about the tech industry. daily standups were particularly challenging. i was on a team full of talented developers, and i very much stuck out as a wildcard. talking to people about their software breaking was not my favorite task. i was testing, but truthfully, this tested me. i found out how hard it is to enter the tech industry with no experience. i didn&apos;t want that to stop me, so i started wondering what it meant to be on the other side. i wanted to build.</p>
          <h3>put me in, chief</h3>
          <p>after talking to a couple of my co-workers, i started researching web development bootcamps. after much consideration, and cost analysis, i decided on bloc.io (now thinkful). on june 4, 2018, i started my journey. this was a particularly strenuous time in my life where i learned much about discipline, time management, research, and autonomy. thankfully i was able to complete this program in february of 2019 with the support of my supervisor and co-workers. i was immediately given a project to develop a seed website for a social justice initiative. right up my alley, tbh. it took about 6 months from receiving the wireframes and design, to connecting various components to api&apos;s. but i did it with the help of a lead developer, and it went live.</p>
          <h3>just gophr it</h3>
          <p>eventually around september 2019, i wanted to be challenged even more as a developer, and i heard of a new startup in the area. gophr, inc. the orange enigma. it turns out they were looking for a developer with experience in react and front end technologies, and i jumped at the chance of building something from the ground up. i joined the team and immediately dove into helping build an internal dashboard, and in a few months, i was taking courses on react native to build a client app to manage customer orders. it was a whirlwind. 2020 hit gophr hard, and eventually, i had to figure something out.</p>
          <h3>on the hunt again</h3>
          <p>during those months between august 2020 - december 2020, i was grateful to be a part of my friend&apos;s business, cajun crate. i managed a warehouse by myself full-time while she sought out someone permanent. while i missed developing, and came home exhausted every night, i came out of that experience with an appreciation for all careers, skill and education levels. it took many months to find the right fit, and many interviews where i saw areas i needed to improve. finally, in december of 2020, i was offered an associate technical consultant position at perficient and started on january 12, 2021.</p>
          <h3>the things you don&apos;t know</h3>
          <p>being at perficient has opened my mind and exposed many areas that i need to improve on both from a technical and professional perspective. currently, i am taking advantage of the qa workshop perficient facilitates to learn more about the programmatic side of qa and testing. thus far, it has stretched me as a developer by showing me where my various coding projects fell short. they also have provided me with a platform to keep learning, and i already have received 3 certificates of completion in areas i deemed necessary to fill specific knowledge gaps. being self taught is difficult without some fundamentals. all of this has been self-motivated, and i plan on becoming more knowledgeable as my time there continues.</p>
          <h3>and without further adieu...</h3>
          <p>congrats! you made it! there is <em>definitely</em> more to the story, and much more to be written as i progress into more in depth projects, and learn more intricate and complex technologies. i had a co-worker once tell me that i am tenacious and through pure grit, i will try my best to figure it out. whatever it should be. the problem at hand. the bug. the new feature needing to be implemented. the test that needs to pass (or fail.. we like negative tests, too). the user story that needs more sub-tasks. or just if we should make another pot of coffee. the point is, this is not the end, you&apos;ve reached the beginning, and i hope to continue writing this story about my journey in this industry.</p>
        </section>}
    </Layout>
  )
}
