import { useEffect } from 'react'
import { useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'arnaldo',
    email: 'arnaldo@example.com'
  })

  const { username, email } = formState

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  useEffect(() => {
    // console.log('useEffect called')
  }, [])

  useEffect(() => {
    // console.log('formState changed')
  }, [formState])

  useEffect(() => {
    // console.log('email changed')
  }, [email])

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type='text'
        name='username'
        className='form-control'
        placeholder='Username'
        value={username}
        onChange={onInputChange}
      />

      <input
        type='email'
        name='email'
        className='form-control mt-2'
        placeholder='example@example.com'
        value={email}
        onChange={onInputChange}
      />

      {username === 'arnaldo2' && <Message />}
    </>
  )
}
