import React, { useState } from 'react'
import styled from 'styled-components';

const RollDice = (props) => {
    
    
  return (
    <DiceContainer>
        <p>{props.answerChecker}</p>
        <img src={`../../Dice/dice_${props.currentDice}.png`} alt="dice 1" onClick={props.afterRolling}/>
        <h3>Click on Dice to Roll</h3>
    </DiceContainer>
    
  )
}

export default RollDice;

const DiceContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        cursor: pointer;
    }
    
`