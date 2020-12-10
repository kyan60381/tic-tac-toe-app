import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
        textAlign: 'center',
        fontFamily: 'Permanent Marker, cursive',
        width:'100px',
        height:'100px',
        boxShadow:'0 0 0 1px #333333',
        border: '1px solid #333333',
        cursor: 'pointer',
        lineHeight: '100px',
        fontSize: '60px',
        },
    }),
);

const Cell = ({children,handleOnClick}) => {
    const classes = useStyles();
    
    return( 
        <Grid item xs={4}>
            <Paper className={classes.paper} onClick={()=>handleOnClick()}>{children}</Paper>
        </Grid>
    );
}

export default Cell;
