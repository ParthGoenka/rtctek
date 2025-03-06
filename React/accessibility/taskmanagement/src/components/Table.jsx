import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {

 

  return (
    <TableContainer
      component={Paper}
      role="region"
      sx={{ p: 5 }}
    >
         <Typography tabIndex={0} variant="h3" aria-label='Menu and related information' sx={{ textAlign: 'center', backgroundColor: '#f0f0f0' }}>Menu</Typography>
      <Table sx={{ minWidth: 650, backgroundColor: '#f0f0f0' }}>
        <TableHead>
          <TableRow>
            <TableCell 
                tabIndex={0}>Dessert (100g serving)</TableCell>
            <TableCell align="right" tabIndex={0}>Calories</TableCell>
            <TableCell align="right" tabIndex={0}>Fat&nbsp;(g)</TableCell>
            <TableCell align="right" tabIndex={0}>Carbs&nbsp;(g)</TableCell>
            <TableCell align="right" tabIndex={0}>Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                component="th"
                scope="row"
                tabIndex={0}
                aria-label={`${row.name}`}
              >
                {row.name}
              </TableCell>
              <TableCell
                align="right"
                tabIndex={0}
                aria-label={`${row.calories}`}
              >
                {row.calories}
              </TableCell>
              <TableCell
                align="right"
                tabIndex={0}
                aria-label={`${row.fat}`}
              >
                {row.fat}
              </TableCell>
              <TableCell
                align="right"
                tabIndex={0}
                aria-label={`${row.carbs}`}
              >
                {row.carbs}
              </TableCell>
              <TableCell
                align="right"
                tabIndex={0}
                aria-label={`${row.protein}`}
              >
                {row.protein}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
