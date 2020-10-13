import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           <MenuIcon>

            Hello

           </MenuIcon>
              
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            FIU Car Rental
          </Typography>

          <Link to='/reg'>
          <Button variant="contained" color="primary">Create Account</Button>
          </Link>

          <Link to='/login'>
          <Button variant="contained" color="primary">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>


      
    </div>
  );
}
