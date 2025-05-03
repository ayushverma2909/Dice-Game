import React, { useState } from 'react'
import GameStart from './components/GameStart'
import GamePlay from './components/GamePlay';

function App() {

  const [gameStarted, setGameStarted] = useState(false);

  function toggleGameplay(){
    setGameStarted((prevValue) => !prevValue)
  }

  return (
    <>
    {gameStarted?<GamePlay/>:<GameStart toggle={toggleGameplay}/>}
      
    </>
  )
}

export default App
