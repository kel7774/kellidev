import styles from '../../styles/JobItem.module.css'

export default function JobItem (props) {
  return (
    <section className='job-container'>
      <h2 className='position'>{props.position}</h2>
      <h3 className='company'>{props.company}</h3>
      <h4 className='duration'>{props.duration}</h4>
      <ul className={styles.list}>
        {props.duties.map(duty => (
          <li key={duty}>{duty}</li>
        ))}
      </ul>
    </section>
  )
}
