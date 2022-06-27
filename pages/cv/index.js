import { NextSeo } from 'next-seo'
import JobItem from '../../components/JobItem'
import { jobs } from '../api/jobs'

export default function CV () {
  return (
    <div className='justify-center flex flex-row'>
      <NextSeo
        title='Kelli Landry - CV'
        description='A list of all relevant jobs and experiences Kelli Landry has had in the past 5 years'
        canonical='http://kellilandry.dev/cv'
      />
      <div className='flex flex-row xs:px-6 xs:py-10 px-24 py-20'>
        <section>
          <h1 className='text-4xl xs:text-lg xs:font-bold text-indigo-600 dark:text-indigo-200'>experience</h1>
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
        <section>
          <h1 className='text-4xl xs:text-lg xs:font-bold text-indigo-600 dark:text-indigo-200'>education</h1>
          <h2 className='text-2xl text-indigo-600 dark:text-indigo-200 mt-4'>university of louisiana - lafayette</h2>
          <h3 className='text-lg text-indigo-600 dark:text-indigo-50 mt-3'>august 2008 - december 2012</h3>
          <p className=' dark:text-indigo-50'>bachelor of science in child and family studies</p>
          <h2 className='text-2xl text-indigo-600 dark:text-indigo-200 mt-4'>bloc.io</h2>
          <h3 className='text-lg text-indigo-600 dark:text-indigo-50 mt-3'>june 2018 - february 2019</h3>
          <p className=' dark:text-indigo-50 pb-5'>completed web development track</p>
          <h1 className='text-4xl xs:text-lg xs:font-bold text-indigo-600 dark:text-indigo-200'>certifications</h1>
          <h2 className='text-2xl text-indigo-600 dark:text-indigo-200 mt-4'>professional scrum master</h2>
          <h3 className='text-lg text-indigo-600 dark:text-indigo-50 mt-3'>issued february 2022</h3>
        </section>
      </div>
    </div>
  )
}
