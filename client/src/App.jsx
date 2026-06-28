import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { useFetchUser } from './hooks/useFetchUser'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { data, loading, error } = useFetchUser();

  return (
    <>
      <section id="center">
        <div className="hero">
          {data?.username ? <p>{data.username}</p> : <p></p>}
        </div>
      </section>
    </>
  )
}

export default App
