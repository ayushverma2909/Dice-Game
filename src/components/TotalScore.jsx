import React from 'react'
import styled from 'styled-components'

const TotalScore = (props) => {
  return (
    <StyledContainer>
        <h1>{props.score}</h1>
        <p>Total Score</p>
    </StyledContainer>
  )
}

export default TotalScore;

const StyledContainer = styled.div`
    max-width: 200px;
    text-align: center;
    h1{
        font-size: 100px;
        line-height: 100px;
    }
    p{
        font-size: 20px;
        font-weight: 700;
    }
`