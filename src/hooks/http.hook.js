
import { useState, useCallback} from 'react'
import React from 'react'

const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (url, method = 'GET', body = null, headers = {
    'Content-type': 'application/json'
  }) => {
    setLoading(true);
    try {
      const response = await fetch(url, {method, body, headers})
      if(!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`)
      }
      const data = await response.json()
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      setError(error.message)
      throw error;
    }
  }, []);

  const clearError = useCallback(() => setError(null), []) 
  return {loading, request, error, clearError}
}

export default useHttp
