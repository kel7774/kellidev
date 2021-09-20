import { useState } from 'react'
import { useRouter } from 'next/router'

export default function ContactForm () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const router = useRouter()

  const handleSubmit = e => {
    e.preventDefault()
    let data = {
      name,
      email,
      message
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      if (res.status === 200) {
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
      }
    })
    router.push('/thanks')
  }

  return (
    <form>
      <div className='flex flex-col pb-4'>
        <label htmlFor='firstName'>name</label>
        <input
          type='text'
          name='name'
          placeholder='name'
          onChange={(e) => setName(e.target.value)}
          value={name}
          className='rounded-lg h-8 w-60 bg-indigo-50'
          // {...register('firstName', { required: true })}
        />
        {/* {errors.name && 'name is required'} */}
      </div>
      <div className='flex flex-col pb-4'>
        <label htmlFor='email'>email</label>
        <input
          type='email'
          name='email'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className='rounded-lg h-8 w-60 bg-indigo-50'
          // {...register('email', {
          //   required: 'required',
          //   pattern: {
          //     value: /\S+@\S+.\S+/,
          //     message: 'must be a valid email'
          //   }
          // })}
        />
        {/* {errors.email && 'email is required'} */}
      </div>
      <div className='flex flex-col pb-4'>
        <label htmlFor='message'>message</label>
        <textarea
          placeholder='message ...'
          name='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='rounded-lg bg-indigo-50 resize-none h-28 w-60 focus:border-indigo-500'
          // {...register('message', {
          //   required: 'message required',
          //   minLength: { value: 100, message: 'Must enter at least 100 characters' }
          // })}
        />
        {/* {errors.textarea && 'a message of at least 100 characters is required'} */}
      </div>
      <input type='submit' className='uppercase tracking-wide rounded-lg p-2 bg-indigo-500 text-indigo-200 hover:bg-indigo-200 hover:text-indigo-500 cursor-pointer' onClick={(e) => handleSubmit(e)} />
    </form>
  )
}
