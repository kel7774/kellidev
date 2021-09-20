export default function JobItem (props) {
  return (
    <section className>
      <h2 className='text-2xl text-indigo-600 font-light mt-4'>{props.position}</h2>
      <h3 className='text-lg text-indigo-600 font-light'>{props.company}</h3>
      <h4 className='text-sm text-indigo-600 font-light'>{props.duration}</h4>
      <ul className>
        {props.duties.map((duty, index) => (
          <li className='font-light' key={index}>{duty}</li>
        ))}
      </ul>
    </section>
  )
}
