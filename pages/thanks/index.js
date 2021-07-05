import Link from 'next/link'
export default function Thanks () {
  return (
    <section>
      <h1>thank you!</h1>
      <p>your email was sent successfully. i will get back to you as soon as possible.</p>
      <Link href='/'>back home</Link>
    </section>
  )
}
