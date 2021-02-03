import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';


var API_URL = 'https://official-joke-api.appspot.com/random_joke'

function App() {

  const [joke, setJoke] = useState('') 
  const [punchline, setPunchline] = useState('') 

  const getAxiosData = () => {

    Axios
      .get(API_URL)
      .then((response) => {
        console.log(response)
        setJoke(response.data.setup)
        setPunchline(response.data.punchline)
      }).catch(e => {
        console.log(`Error: ${e}`)
      })
  }

  const [joke2, setJoke2] = useState('') 
  const [punchline2, setPunchline2] = useState('') 

  const fetchData = () => {

    fetch(API_URL)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        setJoke2(data.setup)
        setPunchline2(data.punchline)
      }).catch(e => {
        console.log(`Error: ${e}`)
      })

  }

  return (
    <>
      <ul className='grid'>
        <li className='box tac'>
          <strong className='title fw:700'>Axios Library</strong>
          <button className='btn round fw\:700' onClick={getAxiosData}>GetAxiosData()</button>
          <code>{`Joke: ${joke}`}</code>
          <code>{`Punchline: ${punchline}`}</code>
        </li>
        <li className='box tac'>
          <strong className='title fw:700'>Fetch</strong>
          <button className='btn round fw\:700' onClick={fetchData}>FetchData()</button>
          <code>{`Joke: ${joke2}`}</code>
          <code>{`Punchline: ${punchline2}`}</code>
        </li>
      </ul>
    </>
  );
}

export default App;
