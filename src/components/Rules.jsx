import React from 'react'
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
        <div>
       <h1>How to play dice game</h1>
       <p>Select any number</p>
       <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
       <p>if you get wrong guess then  2 point will be dedcuted </p>
       </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
    
    font: 600;
    display: flex;
    flex-direction: column;
    align-items:center;
    background-color: #eec9c9;
    width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 5px;
    padding: 20px;
`