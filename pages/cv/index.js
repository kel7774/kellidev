import { useRouter } from 'next/router'
import JobItem from '../../components/JobItem'
import { jobs } from '../api/jobs'
import styles from '../../styles/Jobs.module.css'

export default function CV () {
  const router = useRouter()
  const handleBackNavigation = (e) => {
    router.push('/')
  }
  return (
    <div className={styles.container}>
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
      <button className='back-btn' onClick={handleBackNavigation}>back</button>
    </div>
  )
}
