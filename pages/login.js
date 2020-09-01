import React, { useState, useEffect } from 'react'
import { Button, Form, Icon, Message, Segment } from 'semantic-ui-react'
import Link from 'next/link'
import catchErrors from '../utils/catchErrors'

const INITIAL_USER = {
  email: '',
  password: ''
}

function Signup() {
  const [user, setUser] = useState(INITIAL_USER)
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const isUser = Object.values(user).every(el => Boolean(el))
    isUser ? setDisabled(false) : setDisabled(true)
  }, [user])

  function handleChange(event) {
    const { name, value } = event.target
    setUser(prevState => ({ ...prevState, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      setLoading(true)
      setError('')
      console.log(user)
      // make a request to signup user
    } catch (error) {
      catchErrors(error, setError)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Message
        attached
        icon='privacy'
        header='Welcome Back!'
        content='Please Login with eMail and Password'
        color='blue'
      />
      <Form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}>
        <Message error header='Oops!' content={error} />
        <Segment>
          <Form.Input
            fluid
            icon='envelope'
            iconPosition='left'
            label='eMail'
            placeholder='eMail'
            name='email'
            type='email'
            value={user.email}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            label='Password'
            placeholder='Password'
            name='password'
            type='password'
            value={user.password}
            onChange={handleChange}
          />
          <Button
            disabled={disabled || loading}
            icon='signup'
            type='submit'
            color='blue'
            content='Login'
          />
        </Segment>
      </Form>
      <Message attached='bottom' warning>
        <Icon name='help' />
        New user?{' '}
        <Link href='/signup'>
          <a>Sign up here</a>
        </Link>{' '}
        instead
      </Message>
    </>
  )
}

export default Signup
