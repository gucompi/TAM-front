import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from "react-player"
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "2%",
    width: "96%"
  },
  fila: {
    marginBottom: "5%"
  },
  tarjeta: {
    maxHeight: "400px",
    width: "40%"
  },
  grafico: {
    height: "400px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function Learn() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.fila}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={3}>
            <Typography gutterBottom variant="subtitle1">
              Video #1
                </Typography>
            <ReactPlayer width={"100%"}
              url="https://www.youtube.com/watch?v=ug50zmP9I7s"
            />
          </Grid>
          <Grid item xs={3}>
            <Typography gutterBottom variant="subtitle1">
              Video #1
                </Typography>
            <ReactPlayer width={"100%"}
              url="https://www.youtube.com/watch?v=ug50zmP9I7s"
            />
          </Grid>

          <Grid item xs={3}>
            <Typography gutterBottom variant="subtitle1">
              Video #1
                </Typography>
            <ReactPlayer width={"100%"}
              url="https://www.youtube.com/watch?v=ug50zmP9I7s"
            />
          </Grid>
          <Grid item xs={3}>
            <Typography gutterBottom variant="subtitle1">
              Video #1
                </Typography>
            <ReactPlayer width={"100%"}
              url="https://www.youtube.com/watch?v=ug50zmP9I7s"
            />
          </Grid>

        </Grid>
      </div>

    </div>
  );
}
