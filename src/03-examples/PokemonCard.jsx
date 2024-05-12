import { useLayoutEffect, useRef, useState } from 'react'

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const headingRef = useRef()
  const [headingSize, setHeadingSize] = useState({ with: 0, height: 0 })

  useLayoutEffect(() => {
    const { height, width } = headingRef.current.getBoundingClientRect()
    setHeadingSize({ height, width })
  }, [sprites])

  return (
    <>
      <section style={{ height: 200, display: 'flex' }}>
        <h2 className='text-capitalize' ref={headingRef}>
          #{id} - {name}
        </h2>
        {/* imagenes */}
        <div>
          {sprites.map(sprite => (
            <img key={sprite} src={sprite} alt={name} />
          ))}
        </div>
        <code>{JSON.stringify(headingSize)}</code>
      </section>
    </>
  )
}
