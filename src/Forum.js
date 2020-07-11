import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import { ReCaptcha } from './Recaptcha';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "90%",
    margin: "auto",
    marginTop: "2%"
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: "100%",
    marginBottom: "2%"
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));
function verifyCallback  (recaptchaToken) {
  // Here you will get the final recaptchaToken!!!  
  console.log(recaptchaToken, "<= your recaptcha token")
}

 function updateToken ()  {
  // you will get a new token in verifyCallback
  this.recaptcha.execute();
}
function ForumItem() {
  const classes = useStyles();
 
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src="/logo192.png" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                Compren GGAL LOCO!!
                </Typography>
              <Typography variant="body2" gutterBottom>
                gucompi
                </Typography>
              <Typography variant="body2" color="textSecondary">
                Estuve analizando y hay qe comprar GGAL porque yo lo digo. Punto.
                </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary">
                Denunciar
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{new Date().toLocaleDateString()}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}


function ChatEditor() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Divider />
      <Grid container style={{ padding: '20px' }}>
        <Grid item xs={11}>
          <TextField multiline id="outlined-basic-email" label="Enviar Comentario!" fullWidth />
        </Grid>
        <Grid xs={1} align="right">
          <Fab color="primary" aria-label="add"><SendIcon /></Fab>
        </Grid>
      </Grid>
      <ReCaptcha onVerifyCaptcha={()=>{console.log("AAA")}}></ReCaptcha>
    </Grid>
  )
}


export default function Forum() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ForumItem />
      <ForumItem />
      <ForumItem />


      <ChatEditor></ChatEditor>
     
    </div>
  );
}
