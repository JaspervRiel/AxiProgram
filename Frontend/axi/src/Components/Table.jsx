import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { valueToPercent } from '@mui/base';

function createData(
  name,
  location,
  stock
) {
  return { name, location, stock};
}
async function GetProducts(){
  var object = await fetch('https://localhost:7157/api/Product')
        .then(response=>response.json())
        .then(data => object = data)
        .then(()=> console.log(object));
        return object;
}

// function fillRows(){
//   const rows = [];
//   const data = GetProducts();
//   data.forEach(Product =>console.log(Product));
// }

export default function BasicTable() {
  var rows = GetProducts()
  console.log(rows)
  return(
  <div><h1>hey</h1></div>)
  // return (
  //   <TableContainer component={Paper}>
  //     <Table sx={{ minWidth: 550 }} aria-label="simple table">
  //       <TableHead>
  //         <TableRow>
  //           <TableCell>Products</TableCell>
  //           <TableCell align="right">name</TableCell>
  //           <TableCell align="right">location</TableCell>
  //           <TableCell align="right">stock</TableCell>
  //         </TableRow>
  //       </TableHead>
  //       <TableBody>
  //         {rows.map((row) => (
  //           <TableRow
  //             key={row.name}
  //             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  //           >
  //             <TableCell component="th" scope="row">
  //               {row.name}
  //             </TableCell>
  //             <TableCell align="right">{row.name}</TableCell>
  //             <TableCell align="right">{row.location}</TableCell>
  //             <TableCell align="right">{row.stock}</TableCell>
  //           </TableRow>
  //         ))}
  //       </TableBody>
  //     </Table>
  //   </TableContainer>
  // );
}