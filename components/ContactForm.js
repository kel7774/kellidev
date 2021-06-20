import { useForm } from 'react-hook-form'
import { useState } from 'react'
// import emailjs from 'emailjs-com'
import styles from '../styles/ContactForm.module.css'

export default function ContactForm () {
  // const userName = emailjs.init('user_h88MUUL2z7LyThRYixx88')
  // function sendEmail (e) {
  //   e.preventDefault()
  //   emailjs.sendForm('service_t0zbujf', 'template_xc0l2vw', '.contactForm', userName)
  //     .then((result) => console.log(result.text))
  //     .catch((error) => console.log(error.text))
  // }
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [firstName, setFirstName] = useState(undefined)
  const [lastName, setLastName] = useState(undefined)
  const [email, setEmail] = useState(undefined)

  function handleFirstNameChange (e) {
    setFirstName(e.target.value)
  }
  function handleLastNameChange (e) {
    setLastName(e.target.value)
  }
  function handleEmailChange (e) {
    setEmail(e.target.value)
  }
  return (
    <form className='contactForm'>
      <div className={styles.formField}>
        <label htmlFor='firstName'>first name</label>
        <input
          type='text'
          name='firstName'
          placeholder='first name'
          value={firstName}
          onChange={handleFirstNameChange}
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
          value={lastName}
          onChange={handleLastNameChange}
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
          value={email}
          onChange={handleEmailChange}
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
