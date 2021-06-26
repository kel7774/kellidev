import { useState } from 'react'
import styles from '../styles/ContactForm.module.css'

export default function ContactForm () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

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
  }

  return (
    <form className='contactForm'>
      <div className={styles.formField}>
        <label htmlFor='firstName'>name</label>
        <input
          type='text'
          name='name'
          placeholder='name'
          onChange={(e) => setName(e.target.value)}
          value={name}
          // {...register('firstName', { required: true })}
        />
        {/* {errors.name && 'name is required'} */}
      </div>
      <div className={styles.formField}>
        <label htmlFor='email'>email</label>
        <input
          type='email'
          name='email'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
      <div className={styles.formField}>
        <label htmlFor='message'>message</label>
        <textarea
          placeholder='message ...'
          className={styles.textarea}
          name='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          // {...register('message', {
          //   required: 'message required',
          //   minLength: { value: 100, message: 'Must enter at least 100 characters' }
          // })}
        />
        {/* {errors.textarea && 'a message of at least 100 characters is required'} */}
      </div>
      <input type='submit' className={styles.submit} onClick={(e) => handleSubmit(e)} />
    </form>
  )
}
