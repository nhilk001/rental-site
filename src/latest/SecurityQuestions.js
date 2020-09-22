import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function AutoGridNoWrap() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (

    <div className={classes.root}>

     

        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            Answer the following security questions.
          </Grid>
        
        </Grid>


        <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Question 1</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={1}>What was the name of your first pet?</MenuItem>
            <MenuItem value={2}>What was the name of your favorite teacher?</MenuItem>
            <MenuItem value={3}>What was the model of your first car?</MenuItem>
          </Select>
        </FormControl>
        
        </Grid>

        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <TextField id="standard-basic" label="Asnwer 1" />
          </Grid>
        
        </Grid>
      </Paper>
      
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Question 2</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={1}>What was the name of your first pet?</MenuItem>
            <MenuItem value={2}>What was the name of your favorite teacher?</MenuItem>
            <MenuItem value={3}>What was the model of your first car?</MenuItem>
          </Select>
        </FormControl>
        
        </Grid>

        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <TextField id="standard-basic" label="Asnwer 2" />
          </Grid>
        
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Question 3</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={1}>What was the name of your first pet?</MenuItem>
            <MenuItem value={2}>What was the name of your favorite teacher?</MenuItem>
            <MenuItem value={3}>What was the model of your first car?</MenuItem>
          </Select>
        </FormControl>
        
        </Grid>

        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <TextField id="standard-basic" label="Asnwer 3" />
          </Grid>
        
        </Grid>
      </Paper>
      


      
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Button variant="contained" color="primary">
              Continue
          </Button>
          </Grid>
        </Grid>
      
    </div>
  );
}
