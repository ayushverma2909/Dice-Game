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

<<<<<<< HEAD
    @media (max-width: 800px){
       
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;

        

        img{
            height: 250px;
        }
    }

=======
>>>>>>> cc91b56bde9dcb2bb99c06e01193105378de875d
    
    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
<<<<<<< HEAD

        @media (max-width: 800px){
            h1{
            font-size: 48px;
        }
        }
=======
>>>>>>> cc91b56bde9dcb2bb99c06e01193105378de875d
    }

`

