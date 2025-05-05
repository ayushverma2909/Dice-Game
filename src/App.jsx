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
<<<<<<< HEAD
    
=======
>>>>>>> cc91b56bde9dcb2bb99c06e01193105378de875d
    {gameStarted?<GamePlay/>:<GameStart toggle={toggleGameplay}/>}
      
    </>
  )
}

export default App
