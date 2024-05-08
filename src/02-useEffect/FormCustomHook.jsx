import { useForm } from '../hooks'

export const FormCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } =
    useForm({
      username: '',
      email: '',
      password: ''
    })

  // const { username, email, password } = formState

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr />
      <form action=''>
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

        <input
          type='password'
          name='password'
          className='form-control mt-2'
          placeholder='contraseña'
          value={password}
          onChange={onInputChange}
        />

        <button onClick={onResetForm} className='btn btn-primary mt-2'>
          Borrar
        </button>
      </form>
    </>
  )
}
