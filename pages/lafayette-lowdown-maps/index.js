import { NextSeo } from 'next-seo'

export default function LafayetteMaps () {
  return (
    <div  className='flex flex-col justify-center'>
        <NextSeo
            title="Kelli Landry - Lafayette Lowddown Maps"
            description="Lafayette Lowdown, the Lafayette, LA Comprehensive Map showcasing resources such as restaurants, entertainment options, shopping, speciality services, and more."
            canonical="http://kellilandry.dev/lafayette-lowdown-maps"
        />
        <section className='text-left xs:px-14 xs:py-14 px-28 py-20 xl:px-96 2xl:px-96 lg:px-72'>
            <h1 className='text-3xl text-center font-bold dark:text-indigo-50'>📍lafayette lowdown📍</h1>
            <h2 className='text-xl text-center font-bold dark:text-indigo-50 mt-6 mb-6'>comprehensive maps of lafayette, la showcasing restaurants, businesses, services, and resources throughout the community</h2>
            <h3 className='text-lg text-center font-bold dark:text-indigo-50 mt-6 mb-6'>🆓ALWAYS FREE🆓</h3>
            <h3 className='text-lg text-center font-bold dark:text-indigo-50 mt-6 mb-6'>🚫NEVER PAYWALLED OR GATEKEPT🚫</h3>
            <h3 className='text-lg text-center font-bold dark:text-indigo-50 mt-6 mb-6'>🫶COMMUNITY SUGGESTIONS &amp; CORRECTIONS ENCOURAGED🫶</h3>
            <h4 className='text-base text-center font-bold dark:text-indigo-50 mt-6 mb-6'>like my work &amp; want to support financially? here&apos;s an option to <a href="https://www.buymeacoffee.com/kellilandry" target="_blank" rel='nooopener noreferrer'>buy me a coffee ☕</a></h4>
            <article>

              <a className='navBar font-nav font-bold text-indigo-600 dark:text-indigo-300 uppercase' href='https://www.google.com/maps/d/embed?mid=16ysIlsgTBOBAFQqijNO29D152qXI630&hl=en&ehbc=2E312F' target='_blank' rel='nooopener noreferrer'>do stuff edition</a>
              <div className='relative overflow-hidden w-full' style={{paddingTop: '56.25%'}}>
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=16ysIlsgTBOBAFQqijNO29D152qXI630&ehbc=2E312F" width="640" height="480" className='absolute top-0 bottom-0 left-0 right-0 w-full h-full'></iframe>
              </div>
              <p className='text-lg dark:text-indigo-50 mt-6 mb-6'><u>categories include:</u> parks, trails, museums/exhibits, tattoo shops, entertainment options, bars, nail salons, and live music venues</p>

              <a className='navBar font-nav font-bold text-indigo-600 dark:text-indigo-300 uppercase' href='https://www.google.com/maps/d/embed?mid=1q7SI2kNeslhqGekEt_H6SOxEa6ok1DM&hl=en&ehbc=2E312F' target='_blank' rel='nooopener noreferrer'>food edition</a>
              <div className='relative overflow-hidden w-full' style={{paddingTop: '56.25%'}}>
                <iframe src="https://www.google.com/maps/d/embed?mid=1q7SI2kNeslhqGekEt_H6SOxEa6ok1DM&hl=en&ehbc=2E312F" width="640" height="480" className='absolute top-0 bottom-0 left-0 right-0 w-full h-full'></iframe>
              </div>
              <p className='text-lg dark:text-indigo-50 mb-6 mt-6'><u>categories include:</u> local spots, chains, fast food, plate lunch gold mines, sweet spots, coffee shops - local & chain, boudin + cracklin + meat + delis, late night - after 10pm/24 hour, grocery stores </p>

              <a className='navBar font-nav font-bold text-indigo-600 dark:text-indigo-300 uppercase' href='https://www.google.com/maps/d/embed?mid=1cg9-QcwEyiE26P62wjLyy3WfXsNeGAU&hl=en&ehbc=2E312F' target='_blank' rel='nooopener noreferrer'>shopping edition</a>
              <div className='relative overflow-hidden w-full' style={{paddingTop: '56.25%'}}>
                <iframe src="https://www.google.com/maps/d/embed?mid=1cg9-QcwEyiE26P62wjLyy3WfXsNeGAU&hl=en&ehbc=2E312F" width="640" height="480" className='absolute top-0 bottom-0 left-0 right-0 w-full h-full'></iframe>
              </div>
              <p className='text-lg dark:text-indigo-50 mb-6 mt-6'><u>categories include:</u> gift stores, boutiques, specialities, chain clothing + goods, thrifting + vintage + antiques + pawn shops, smoke + vape shops, car repair </p>
          </article>
      </section>
    </div>
  )
}