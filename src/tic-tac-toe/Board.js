import React from 'react';
import Grid from '@material-ui/core/Grid';
import GameCell from './Cell';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
      gridContainer:{
          width: '306px',
      }
  }),
);

const Board = ({gameState,onCellClick}) => {
    const classes = useStyles();

    const gameCells = gameState.map((item,index)=>
        <GameCell key={index} handleOnClick={()=>onCellClick(index)}>{item}</GameCell>
        );
    
    return (
        <Grid container className={classes.gridContainer}>
            {gameCells}
        </Grid>
    );
}

export default Board;
