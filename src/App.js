<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, miles, color, seats) {
  return { name, miles, color, seats };
}

const rows = [
  createData('Ford Explorer', 159, 6.0, 24),
  createData('Toyota camery', 237, 9.0, 37),
  createData('some other car', 262, 16.0, 24),
  createData('other car', 305, 3.7, 67),
  createData('other car also', 356, 16.0, 49),
];
 function App() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Cars for rent</TableCell>
            <TableCell align="right">miles</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">seats</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.miles}</TableCell>
              <TableCell align="right">{row.color}</TableCell>
              <TableCell align="right">{row.seats}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
=======
>>>>>>> 17db510ec6ee7755c7c7057b2465d21085e6a0a9
