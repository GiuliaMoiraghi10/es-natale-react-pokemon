import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [characters, setCharacters] = useState([])

  function fetchCharacters() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then(res => {
        console.log(res)
        setCharacters(res.data.results)
      })
      .catch(err => {
        console.error(err)
      })
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <>
      <div className='container-title'>
        <h1 className='title'>Pokémon</h1>
      </div>
      <div className='container'>
        <ul className='characters'>
          {characters.map((character) => (
            <li className='character' key={character.id}>{character.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
