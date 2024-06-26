import { useCounter, useFetch } from '../hooks'
import { LoadingMessage } from '../03-examples/LoadingMessage'
import { PokemonCard } from '../03-examples/PokemonCard'

export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1)
  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  )
  return (
    <>
      <h1>Información de pokemón</h1>
      <hr />
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={data.id}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny
          ]}
        />
      )}

      <button
        onClick={counter > 1 ? () => decrement() : null}
        className='btn btn-secondary mt-2'
      >
        Anterior
      </button>
      <button onClick={() => increment()} className='btn btn-secondary mt-2'>
        Siguiente
      </button>
    </>
  )
}
