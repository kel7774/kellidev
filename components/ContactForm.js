import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from '../styles/ContactForm.module.css'

export default function ContactForm () {
  const { register, formState: { errors }, handleSubmit } = useForm()
  const [firstName, setFirstName] = useState(undefined)
  const [lastName, setLastName] = useState(undefined)
  const [email, setEmail] = useState(undefined)
  const [message, setMessage] = useState(undefined)
  function handleFirstNameChange (e) {
    setFirstName(e.target.value)
  }
  function handleLastNameChange (e) {
    setLastName(e.target.value)
  }
  function handleEmailChange (e) {
    setEmail(e.target.value)
  }
  function handleMessageChange (e) {
    setMessage(e.target.value)
  }

  return (
    <form className='contactForm' onSubmit={handleSubmit}>
      <div className={styles.formField}>
        <label htmlFor='firstName'>first name</label>
        <input
          type='text'
          name='firstName'
          placeholder='first name'
          onChange={() => handleFirstNameChange}
          value={firstName}
          {...register('firstName', { required: true })}
        />
        {errors.firstName && 'first name is required'}
      </div>
      <div className={styles.formField}>
        <label htmlFor='lastName'>last name</label>
        <input
          type='text'
          name='lastName'
          placeholder='last name'
          onChange={() => handleLastNameChange}
          value={lastName}
          {...register('lastName', { required: true })}
        />
        {errors.lastName && 'last name is required'}
      </div>
      <div className={styles.formField}>
        <label htmlFor='email'>email</label>
        <input
          type='email'
          name='email'
          placeholder='email'
          onChange={() => handleEmailChange}
          value={email}
          {...register('email', {
            required: 'required',
            pattern: {
              value: /\S+@\S+.\S+/,
              message: 'must be a valid email'
            }
          })}
        />
        {errors.email && 'email is required'}
      </div>
      <div className={styles.formField}>
        <label htmlFor='message'>message</label>
        <textarea
          placeholder='message ...'
          className={styles.textarea}
          name='message'
          value={message}
          onChange={() => handleMessageChange}
          {...register('message', {
            required: 'message required',
            minLength: { value: 100, message: 'Must enter at least 100 characters' }
          })}
        />
        {errors.textarea && 'a message of at least 100 characters is required'}
      </div>
      <input type='submit' className={styles.submit} />
    </form>
  )
}
