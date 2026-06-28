import { useState, useEffect, useCallback } from 'react'

const API_URL = `${API_HOST}/api/message`

/**
 * Fetches a user from the API.
 * @returns {{ user: object|null, loading: boolean, error: Error|null, refetch: () => void }}
 */
export function useFetchUser() {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchData();
  }, []);

  return { data: data, loading: false, error: null };
}

export default useFetchUser
