import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width:"100%",
    height:"100%",
    overflowY:"scroll"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  fecha:{
    fontSize:"0.8em",
    margin:"0 2%",
    right:"0px"
  }
});

export default function Tarjeta() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Grafico #1
      </Typography>
      <Typography variant="h5" component="h2">
        ETH
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        BULL
      </Typography>
      <Typography variant="body2" component="ul">
        <ul>
        <li>Analisis 1</li>
          <li>Analisis 2</li>
          <li>Analisis 3</li>
        </ul>
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Gucompi</Button>

    <Typography className={classes.fecha}>
        {new Date().toLocaleDateString()}
      </Typography>
    </CardActions>
  </Card>
  );
}
