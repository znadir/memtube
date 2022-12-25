import { useEffect, useState } from 'react'

export function useFetch(url) {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState()
  const [error, setError] = useState(0)
  const [loads, setLoads] = useState(1) // handles reload()

  function reload() {
    setLoads(loads + 1)
  }

  useEffect(() => {
    if (!url) return

    async function fetchData() {
      try {
        setIsLoading(true)
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (err) {
        console.log(err)
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url, loads])

  return { data, isLoading, error, reload }
}
