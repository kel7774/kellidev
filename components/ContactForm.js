import { useState } from 'react'
import styles from '../styles/ContactForm.module.css'

export default function ContactForm () {
  const [state, setState] = useState({ firstName: '', lastName: '', email: '', message: '' })
  const handleChange = event => {
    const { name, value } = event.target
    setState({
      ...state,
      [name]: value
    })
  }

  const handlePress = () => {
    fetch ('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        message: state.message
      })
    })
  }
  return (
    <form className='contactForm' onSubmit={handlePress}>
      <div className={styles.formField}>
        <label htmlFor='firstName'>first name</label>
        <input
          type='text'
          name='firstName'
          placeholder='first name'
          onChange={handleChange}
          // value={firstName}
          // onChange={() => handleFirstNameChange}
          // {...register('firstName', { required: true })}
        />
        {/* {errors.firstName && 'first name is required'} */}
      </div>
      <div className={styles.formField}>
        <label htmlFor='lastName'>last name</label>
        <input
          type='text'
          name='lastName'
          placeholder='last name'
          onChange={handleChange}
          // value={lastName}
          // onChange={() => handleLastNameChange}
          // {...register('lastName', { required: true })}
        />
        {/* {errors.lastName && 'last name is required'} */}
      </div>
      <div className={styles.formField}>
        <label htmlFor='email'>email</label>
        <input
          type='email'
          name='email'
          placeholder='email'
          onChange={handleChange}
          // value={email}
          // onChange={() => handleEmailChange}
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
          // value={message}
          // onChange={() => handleMessageChange}
          // {...register('message', {
          //   required: 'message required',
          //   minLength: { value: 100, message: 'Must enter at least 100 characters' }
          // })}
        />
        {/* {errors.textarea && 'a message of at least 100 characters is required'} */}
      </div>
      <input type='submit' className={styles.submit} />
    </form>
  )
}
