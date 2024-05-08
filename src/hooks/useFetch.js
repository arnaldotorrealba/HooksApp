import { useEffect } from 'react'
import { useState } from 'react'

export const useFetch = url => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null
  })

  useEffect(() => {
    getFecth()
  }, [url])

  const setIsLoadingState = () => {
    setState({
      ...state,
      data: null,
      isLoading: true
    })
  }

  const getFecth = async () => {
    setIsLoadingState()

    const resp = await fetch(url)

    //sleep
    await new Promise(resolve => setTimeout(resolve, 500))

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText
        }
      })
      return
    }

    const data = await resp.json()

    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null
    })

    //Manejo del caché
  }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    ...state
  }
}
