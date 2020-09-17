import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


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


export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (

       
    <div className={classes.root}>
        
        Search for your car

        <MuiPickersUtilsProvider utils={DateFnsUtils}>


            <Grid container justify="space-around">
                <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="pickupDate"
                label="Pick up Date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
                <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="dropoffDate"
                label="Dropoff Date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
                
            </Grid>

        </MuiPickersUtilsProvider>

        <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                    <TextField id="standard-basic" label="Location" />
                </Grid>

            </Grid>
        </Paper>

        
            <Grid container wrap="nowrap" spacing={1}>
            <Grid item>
            <Button variant="contained" color="primary">
                Search
            </Button>
            </Grid>
            </Grid>
        
        

    </div>
    
    


  );
}