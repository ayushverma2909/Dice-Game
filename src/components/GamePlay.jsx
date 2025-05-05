import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import styled from 'styled-components'
import { Button, WhiteButton } from './styles/button'
import Rules from './Rules'

const GamePlay = () => {

    const [currentDice, setCurrentDice] = useState(1);
    const [selectedNumber, setSelectedNumber] = useState();
    const [finalScore, setFinalScore] = useState(0);
    const [errorMessage, setErrorMessage] = useState("")
    const [showRules, setShowRules] = useState(false)
    const [answerChecker, setanswerChecker] = useState("")

   function resetScore(){
       setFinalScore(0)
   }

    function afterRolling(event){
        if(!selectedNumber){
            setErrorMessage( "Please Select the number")
            return
        }
        setErrorMessage("")
        event.preventDefault();
        const num = Math.floor(Math.random() * 6) + 1;
        setCurrentDice((prev) => num);

        

        if(selectedNumber === num){
            setFinalScore((prev) => prev+num)
            setanswerChecker("Correct Answer + " + num + " points")
        } else{
            setFinalScore((prev) => prev-2)
            setanswerChecker("Wrong Answer -2 points")
        }

        setSelectedNumber(null)
    }
    

  return (
    <main>
        <PageContainer>
            <Main>
                <TotalScore score={finalScore}/>
                <NumberSelector setErrorMessage={setErrorMessage} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} errorMessage={errorMessage} setanswerChecker={setanswerChecker} />
            </Main>
            <RollDice currentDice={currentDice} afterRolling={afterRolling} answerChecker={answerChecker} />
            <Btns >
                <WhiteButton onClick={resetScore}>Reset Score</WhiteButton>
                <Button onClick={() => setShowRules((prev) => !prev)}>{showRules?"Hide": "Show"} Rules</Button>
            </Btns>
            {showRules&&<Rules />}
        </PageContainer>
    </main>
    
  )
}

export default GamePlay;

const PageContainer = styled.div`
    padding: 0 0 2% 0;
`

const Main = styled.div`
    padding-top: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 600px){
        display: flex;
        flex-direction: column;
    }

    
`
const Btns = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width:40%;
    margin: 0 auto;
    margin-top: 40px;
    gap: 10px;

`