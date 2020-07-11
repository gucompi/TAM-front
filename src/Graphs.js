import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tarjeta from './Tarjeta'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:"2%"
  },
  fila:{
    marginBottom:"5%"
  },
  tarjeta:{
    maxHeight:"400px",
    width:"40%"
  },
  grafico:{
    height:"400px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function Graphs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.fila}>
      <Grid container spacing={3} justify="center">
        <Grid class={classes.tarjeta} item xs={4}>
          <Tarjeta></Tarjeta>
        </Grid>
        <Grid className={classes.grafico} item xs={6}>
          <iframe  id="tradingview_1a9c0"
            src="https://s.tradingview.com/embed/Ypov7RTu/?method=script&utm_source=members.ichimokufibonacci.com&utm_medium=widget&utm_campaign=chart&utm_term=undefined" 
            style={{width: '100%', height: '100%', margin: '0 !important', padding: '0 !important'}} 
            frameBorder={0} allowTransparency="true" scrolling="no" />
        </Grid>
      </Grid>
      </div>
      <div className={classes.fila}>
      <Grid container spacing={3} justify="center">
        <Grid class={classes.tarjeta} item xs={4}>
          <Tarjeta></Tarjeta>
        </Grid>
        <Grid className={classes.grafico} item xs={6}>
          <iframe  id="tradingview_1a9c0"
            src="https://s.tradingview.com/embed/Ypov7RTu/?method=script&utm_source=members.ichimokufibonacci.com&utm_medium=widget&utm_campaign=chart&utm_term=undefined" 
            style={{width: '100%', height: '100%', margin: '0 !important', padding: '0 !important'}} 
            frameBorder={0} allowTransparency="true" scrolling="no" />
        </Grid>
      </Grid>
      </div>
    </div>
  );
}
