import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));


export default function AutoGridNoWrap() {
  const classes = useStyles();

  return (

    <div className={classes.root}>

        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            Create an Account
          </Grid>
        
        </Grid>

      
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <TextField id="standard-basic" label="Country" />
          </Grid>
        
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <TextField id="standard-basic" label="First Name" />
          </Grid>
          
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <TextField id="standard-basic" label="Last Name" />
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <TextField id="standard-basic" label="Email Address" />
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <TextField id="standard-basic" label="Password" />
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <TextField id="standard-basic" label="Address" />
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <TextField id="standard-basic" label="Zip/Postal Code" />
          </Grid>
        </Grid>
      </Paper>


      
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Button variant="contained" color="primary">
              Register
          </Button>
          </Grid>
        </Grid>
      
    </div>
  );
}
