export default function JobItem (props) {
  return (
    <div>
      <h2 className='text-2xl text-indigo-600 dark:text-indigo-200 mt-4'>{props.position}</h2>
      <h3 className='text-lg text-indigo-600 dark:text-indigo-50'><span>💻</span>{' '}{props.company}</h3>
      <h4 className='text-sm text-indigo-600 dark:text-indigo-50'><span>⏰</span>{' '}{props.duration}</h4>
      <ul className='mt-4'>
        {props.duties.map((duty, index) => (
          <li className=' dark:text-indigo-50' key={index}>{duty}</li>
        ))}
      </ul>
    </div>
  )
}
