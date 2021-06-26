import Layout from '../../layout/Layout'
import JobItem from '../../components/JobItem'
import { jobs } from '../api/jobs'
import classes from '../../styles/Jobs.module.css'

export default function CV () {
  return (
    <Layout>
      <div className={classes.cv}>
        <section>
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
    </Layout>
  )
}
