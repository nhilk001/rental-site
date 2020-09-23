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

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';


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


  const [value, setValue] = React.useState('visa');
    const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };


  return (

    <div className={classes.root}>

     

        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            Checkout
          </Grid>
        
        </Grid>

        <Grid>
        <FormControl component="fieldset">
            <FormLabel component="legend">Form of Payment</FormLabel>
            <RadioGroup aria-label="paymentform" name="pay1" value={value} onChange={handleChangeValue}>
                <FormControlLabel value="visa" control={<Radio />} label="Visa" />
                <FormControlLabel value="mastercard" control={<Radio />} label="MasterCard" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
            </RadioGroup>
        </FormControl>
        </Grid>
        
      
      <Paper className={classes.paper}>
       
      <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <TextField id="standard-basic" label="Name on Card" />
          </Grid>
        
        </Grid>

        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <TextField id="standard-basic" label="Expiration" />
          </Grid>
        
        </Grid>

        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <TextField id="standard-basic" label="Security Code" />
          </Grid>
        
        </Grid>

        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <TextField id="standard-basic" label="Email" />
          </Grid>
        
        </Grid>

      </Paper>

      
      


      
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Button variant="contained" color="primary">
              Pay
          </Button>
          </Grid>
        </Grid>
      
    </div>
  );
}
