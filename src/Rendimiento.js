import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Rendimientos() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Rendimiento Cartera TAM</Title>
      <Typography component="p" variant="h4">
        +70%
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Ult. Actualizacion: {new Date().toLocaleDateString()}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver Historico
        </Link>
      </div>
    </React.Fragment>
  );
}
