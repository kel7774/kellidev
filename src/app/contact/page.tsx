
export default function Contact () {
  return (
    <div className="min-h-screen py-16 px-6">

        <section className='flex flex-col items-center py-2'>
          <h1 className="text-4xl md:text-5xl font-cabinet font-bold mb-4 text-center">Send me a <span className="text-frog-green">Line</span></h1>
          <a href='mailto:landry.kel@gmail.com' className="font-geist bold hover:text-frog-green transition-colors"><strong>E-mail</strong> me 📧</a>
          <a href='https://www.linkedin.com/in/kellilandry/' target='_blank' rel='noopener noreferrer' className='font-geist bold hover:text-frog-green transition-colors'>Connect on <strong>LinkedIn</strong> 💼</a>
          <a href='https://calendly.com/landry-kel/30min' target='_blank' rel='noopener noreferrer' className='font-geist bold hover:text-frog-green transition-colors'>Schedule consult thru <strong>Calendly</strong> 📅</a>
          <p className='dark:text-indigo-50 text-center w-1/2 mt-4'>Though I love referrals from social media, I ask that our main communication be done through email until we can speak in person through either a Zoom or phone call.</p>
        </section>
    </div>
  )
}
