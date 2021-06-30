import styles from '../styles/LinkSection.module.css'

export default function LinkSection (props) {
  return (
    <section className={styles.linkContainer}>
      <div className={styles.links}>
        <section className={styles.links}>
          <span role='img' className='span'>{props.firstEmoji}<a href={props.firstHref} target='_blank' rel='noopener noreferrer'>{props.firstLinkName}</a></span>
          <span role='img' className='span'>{props.secondEmoji}<a href={props.secondHref} target='_blank' rel='noopener noreferrer'>{props.secondLinkName}</a></span>
        </section>
      </div>
    </section>
  )
}
