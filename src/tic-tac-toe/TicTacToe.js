import React,{useState} from 'react';
import Board from './Board';
import {Button,Container,Grid,Typography} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    resetButton:{
      marginTop:'2rem',
    },
    headerText:{
      marginBottom:'1rem',
    },
    statusText:{
      marginTop:'2rem',
    },
    container:{
      margin: '50px auto',
      textAlign: 'center',
    },
  }),
);

function TicTacToe() {
    const [gameActive,setGameActive]=useState(true);
    const [gameState,setGameState]=useState(['', '', '', '', '', '', '', '', '']);
    const [currentPlayer,setCurrentPlayer]=useState('X');
    const [gameStatus,setGameStatus]=useState(`It's ${currentPlayer}'s turn`);

    const classes = useStyles();

    let nextGameState = [];
    let winner = '';

    const handleRestartGame = ()=>{
        setGameActive(true);
        setCurrentPlayer('X');
        winner= '';
        setGameState(['', '', '', '', '', '', '', '', '']);
        setGameStatus(`It's X's turn`);
    }
  
    const handlePlayerClick = (clickedIndex)=>{
        if (gameState[clickedIndex] !== '') {
            return;
        }
        if(!gameActive)
            return;
    
        nextGameState = gameState.map((item, index) => 
            index === clickedIndex?currentPlayer:item
        )
        setGameState(nextGameState);
        
        if(checkGameHasWinner())
        {
            setGameActive(false);
            setGameStatus(`Player ${winner} has won`);
        }
        else if(checkGameIsTied())
        {
            setGameActive(false);
            setGameStatus("Game ended in a draw");
        }
        else
            changePlayer();
    
    }

    const checkGameIsTied = () => {
        for (let i = 0; i <nextGameState.length ; i++) {
          if(nextGameState[i]==='')
            return false;
        }
        return true;
      }
    
    const checkGameHasWinner = () => {
        return(findWinner(0,3,6)||
            findWinner(1,4,7)||
            findWinner(2,5,8)||
            findWinner(0,1,2)||
            findWinner(3,4,5)||
            findWinner(6,7,8)||
            findWinner(0,4,8)||
            findWinner(2,4,6)
        );
    }

    const findWinner = (i,j,k) =>{
        if(nextGameState[i]!=="" && nextGameState[j]!=="" && nextGameState[k]!=="")
        {
            if(nextGameState[i]===nextGameState[j] && nextGameState[j]===nextGameState[k])
            {
                winner = nextGameState[i];
                return true;
            }
        }
        return false;
    }

    const changePlayer = ()=>{
      const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
      setCurrentPlayer(nextPlayer);
    }

    return (
        <Grid container direction='column' alignItems='center' className={classes.container}>
            <Typography variant="h4" className={classes.headerText}>
            Tic Tac Toe
            </Typography>
            
            <Board gameState={gameState} onCellClick={handlePlayerClick}/>
            
            <Typography variant="h4" className={classes.statusText}>
            {gameStatus}
            </Typography>
            <Container>
                <Button size="medium" variant="contained" className={classes.resetButton} onClick={handleRestartGame}>
                    Restart Game
                </Button>
            </Container>
        </Grid>
    )
}

export default TicTacToe

