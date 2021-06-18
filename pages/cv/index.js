import Layout from '../../layout/Layout'
import JobItem from '../../components/JobItem'
import { jobs } from '../api/jobs'
import styles from '../../styles/Jobs.module.css'

export default function CV () {
  return (
    <Layout>
      <header className={styles.header}>experience</header>
      {jobs.map(job => (
        <JobItem
          key={job.company}
          position={job.position}
          company={job.company}
          duration={job.duration}
          duties={job.duties}
        />
      ))}
    </Layout>
  )
}
