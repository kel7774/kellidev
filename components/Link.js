import styles from '../styles/LinkSection.module.css'

export default function Link (props) {
  return (
    <section className={styles.linkContainer}>
      <section className={styles.links}>
        <span role='img' className='span'>{props.emoji}<a href={props.href} target='_blank' rel='noopener noreferrer'>{props.name}</a></span>
      </section>
    </section>
  )
}
