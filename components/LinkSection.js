import styles from '../styles/LinkSection.module.css'

export default function LinkSection (props) {
  return (
    <div className={styles.linkContainer}>
      <h4>{props.category}</h4>
      <div className={styles.links}>
        <section className={styles.links}>
          <span role='img' className='span'>{props.firstEmoji}</span><a href={props.firstHref} target='_blank' rel='noopener noreferrer'>{props.firstLinkName}</a>
          <span role='img' className='span'>{props.secondEmoji}</span><a href={props.secondHref} target='_blank' rel='noopener noreferrer'>{props.secondLinkName}</a>
        </section>
      </div>
    </div>
  )
}
