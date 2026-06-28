import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { useFetchData } from './hooks/useFetchData'
import './App.css'

const getApiUrl = (endpoint) => `${API_HOST}/${endpoint}`;

function App() {
  const [count, setCount] = useState(0);
  const { data: userData, loading: userLoading, error: userError } = useFetchData(getApiUrl('api/user'));
  const { data: dogData, loading: dogLoading, error: dogError } = useFetchData(getApiUrl('api/dog'));

  return (
    <>
      <section id="center">
        <div className="hero">
          {userData?.user?
          <div className="user-info">
            <p>{userData.user.username}</p>
          </div> : <p></p>}
        </div>
        <div>
          {dogData?.dog?.image?
          <div className="dog-info">
            <img src={dogData.dog.image} alt="Dog" />
          </div> : <p></p>}
        </div>
      </section>
    </>
  )
}

export default App
