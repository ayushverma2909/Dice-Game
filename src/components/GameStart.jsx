import React from "react";
import { Button } from "./styles/button";
import styled from 'styled-components';

const GameStart = (props) => {
    return <Container>
        <div>
            <img src="images/dices.png" alt="" height={500}/>
        </div>
        <div className="content">
            <h1>Dice Game</h1>
            <Button onClick={props.toggle}>Play Now</Button>
        </div>
    </Container>
}

export default GameStart;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    
    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }

`

