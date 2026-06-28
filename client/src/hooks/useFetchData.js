import { useState, useEffect, useCallback } from 'react'

const API_URL = `${API_HOST}/api/user`

export function useFetchData(endpoint) {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          console.error('HTTP status:', response.status);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching:', error);
      }
    };
    fetchData();
  }, []);

  return { data: data, loading: false, error: null };
}

export default useFetchData;
