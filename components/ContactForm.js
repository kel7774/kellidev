import React, { useState } from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import { MenuItem, Input } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import https from 'https'

function ContactForm () {
  const [formError, setFormError] = useState({ error: '' })
  const [querySubject, setQuerySetsubject] = useState('')
  const [name_, setName_] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [clientMsg, setClientMsg] = useState('')

  const serviceOptions = [
    {
      value: 'option1',
      label: 'option1'
    },
    {
      value: 'option2',
      label: 'option2'
    },
    {
      value: 'option3',
      label: 'option3'
    },
    {
      value: 'option4',
      label: 'option4'
    }
  ]

  const sendMail = async (
    client_name,
    client_email,
    client_message,
    client_subject
  ) => {
    const data = JSON.stringify({
      name_: client_name,
      email: client_email,
      client_message: client_message,
      subject: client_subject
    })

    const options = {
      path: '/api/sendMail',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    }

    const req = https.request(options, (res) => {
      // console.log(`statusCode: ${res.statusCode}`);

      res.on('data', (d) => {
        // process.stdout.write(d);
        // console.log("data  from API >> ", JSON.parse(d));
      })
    })

    req.on('error', () => {
      setFormError({
        error: 'Unable to send your message please try after some time.'
      })
    })

    req.write(data)
    req.end()
  }

  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column', padding: '50px' }}
      >
        <Input
          style={{ width: '100%', color: 'black' }}
          type='text'
          value={name_}
          placeholder='What is your name ?'
          onChange={(e) => setName_(e.target.value)}
          required
        />
        <Input
          style={{ width: '100%', color: 'black' }}
          value={clientEmail}
          type='email'
          placeholder='What is your email ?'
          onChange={(e) => setClientEmail(e.target.value)}
          required
        />
        <TextField
          style={{ width: '100%', color: 'black' }}
          id='standard-select-Interest'
          select
          label='What are you interested in ?'
          value={querySubject}
          onChange={(e) => setQuerySetsubject(e.target.value)}
          required
        >
          {serviceOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          style={{ width: '100%', color: 'black' }}
          id='client-message-textarea'
          label='Message'
          multiline
          rows={4}
          value={clientMsg}
          onChange={(e) => setClientMsg(e.target.value)}
        />
        {formError.error
          ? (
            <div className='form__error'>
              <span style={{ color: 'black' }}>{formError.error}</span>
            </div>
            )
          : (
              ''
            )}
        <div>
          <button
            disabled={!name_ || !clientEmail || !clientMsg || !querySubject}
            type='submit'
            style={
              !name_ || !clientEmail || !clientMsg || !querySubject
                ? {
                    backgroundColor: '#878a8f',
                    color: 'white',
                    transform: 'scale(1)',
                    cursor: 'default',
                    margin: '50px 0'
                  }
                : { margin: '50px 0' }
            }
            onClick={(e) => {
              e.preventDefault()
              sendMail(name_, clientEmail, clientMsg, querySubject)
            }}
          >
            <MailOutlineIcon /> Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm

// import { useState } from 'react'
// import styles from '../styles/ContactForm.module.css'
// import sendEmail from '../utils/sendEmailToMe'

// export default function ContactForm () {
//   const [firstName, setFirstName] = useState(undefined)
//   const [lastName, setLastName] = useState(undefined)
//   const [email, setEmail] = useState(undefined)
//   const [message, setMessage] = useState(undefined)
//   function handleFirstNameChange (e) {
//     setFirstName(e.target.value)
//   }
//   function handleLastNameChange (e) {
//     setLastName(e.target.value)
//   }
//   function handleEmailChange (e) {
//     setEmail(e.target.value)
//   }
//   function handleMessageChange (e) {
//     setMessage(e.target.value)
//   }

//   return (
//     <form className='contactForm' onSubmit={sendEmail}>
//       <div className={styles.formField}>
//         <label htmlFor='firstName'>first name</label>
//         <input
//           type='text'
//           name='firstName'
//           placeholder='first name'
//           onChange={() => handleFirstNameChange}
//           // value={firstName}
//           // onChange={() => handleFirstNameChange}
//           // {...register('firstName', { required: true })}
//         />
//         {/* {errors.firstName && 'first name is required'} */}
//       </div>
//       <div className={styles.formField}>
//         <label htmlFor='lastName'>last name</label>
//         <input
//           type='text'
//           name='lastName'
//           placeholder='last name'
//           onChange={() => handleLastNameChange}
//           // value={lastName}
//           // onChange={() => handleLastNameChange}
//           // {...register('lastName', { required: true })}
//         />
//         {/* {errors.lastName && 'last name is required'} */}
//       </div>
//       <div className={styles.formField}>
//         <label htmlFor='email'>email</label>
//         <input
//           type='email'
//           name='email'
//           placeholder='email'
//           onChange={() => handleEmailChange}
//           // value={email}
//           // onChange={() => handleEmailChange}
//           // {...register('email', {
//           //   required: 'required',
//           //   pattern: {
//           //     value: /\S+@\S+.\S+/,
//           //     message: 'must be a valid email'
//           //   }
//           // })}
//         />
//         {/* {errors.email && 'email is required'} */}
//       </div>
//       <div className={styles.formField}>
//         <label htmlFor='message'>message</label>
//         <textarea
//           placeholder='message ...'
//           className={styles.textarea}
//           name='message'
//           // value={message}
//           onChange={() => handleMessageChange}
//           // {...register('message', {
//           //   required: 'message required',
//           //   minLength: { value: 100, message: 'Must enter at least 100 characters' }
//           // })}
//         />
//         {/* {errors.textarea && 'a message of at least 100 characters is required'} */}
//       </div>
//       <input type='submit' className={styles.submit} />
//     </form>
//   )
// }
