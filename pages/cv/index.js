import { NextSeo } from 'next-seo'
import JobItem from '../../components/JobItem'
import { jobs } from '../api/jobs'
import classes from '../../styles/Jobs.module.css'

export default function CV () {
  return (
    <div>
      <NextSeo
        title='Kelli Landry - CV'
        description='A list of all relevant jobs and experiences Kelli Landry has had in the past 5 years'
        canonical='http://kellilandry.dev/cv'
      />
      <div className={classes.cv}>
        <section className={classes.experience}>
          <h1 className={classes.experienceHeader}>experience</h1>
          {jobs.map(job => (
            <JobItem
              key={job.company}
              position={job.position}
              company={job.company}
              duration={job.duration}
              duties={job.duties}
            />
          ))}
        </section>
        <section className={classes.education}>
          <h1>education</h1>
          <h2>university of louisiana - lafayette</h2>
          <h3>august 2008 - december 2012</h3>
          <p>bachelor of science in child and family studies</p>
          <h2>bloc.io</h2>
          <h3>june 2018 - february 2019</h3>
          <p>completed web development track</p>
        </section>
      </div>
    </div>
  )
}
