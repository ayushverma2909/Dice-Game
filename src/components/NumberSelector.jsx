import React from 'react'
import styled from 'styled-components';

const NumberSelector = (props) => {

    const arrayNumber = [1,2,3,4,5,6];
    
    function errorHandler(num){
        props.setSelectedNumber(num)
        props.setErrorMessage("")
        props.setanswerChecker("")
    }


  return (
    <NumberSelectorContainer>
        <p className='errorMessage'>{props.errorMessage}</p>
        <div className='flexContainer'>
            {arrayNumber.map((num, i) => (
                <Box 
                    isselected={num===props.selectedNumber}
                    key={i}
                    onClick={() => errorHandler(num)}
                > 
                    {num} 
                </Box>
            ))}
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
    
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: end;

    .errorMessage{
        color: red;
    }
     
    .flexContainer{
        display: flex;
        gap: 20px;

        @media (max-width: 400px){
            gap: 5px
        }
    }
    p{
        font-size: 20px;
        font-weight: 700;
    }

`

const Box = styled.div`
    width: 50px;
    height: 50px;
    font-size: 24px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-weight: 700;
    background-color: ${(props) => props.isselected ? "black" : "white"};
    color: ${(props) => props.isselected ? "white" : "black"};
    cursor: pointer;
`