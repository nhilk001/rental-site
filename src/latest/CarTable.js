import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'model', headerName: 'Model', width: 130 },
  { field: 'brand', headerName: 'Brand', width: 130 },
  {
    field: 'year',
    headerName: 'Year',
    type: 'number',
    width: 150,
  },
  {
    field: 'condition',
    headerName: 'Condition',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    
},
];

const rows = [
  { id: 1, model: 'Corolla', brand: 'Toyota', year: 2015 },
  { id: 2, model: 'Focus', brand: 'Ford', year: 2000 },
  { id: 3, model: 'Camri', brand: 'Toyota', year: 2020 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      <Button variant="contained" color="primary">
              Add Entry
      </Button>

     


    </div>
  );
}
