import { useFetch } from '../hooks'

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    'https://pokeapi.co/api/v2/pokemon/7'
  )
  return (
    <>
      <h1>Información de pokemón</h1>
      <hr />
      {isLoading && <p>Cargando...</p>}
      <h2>{data?.name}</h2>
    </>
  )
}
