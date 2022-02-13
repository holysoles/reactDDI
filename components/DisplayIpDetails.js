import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default class IpItem extends React.Component {
  render(){
    console.log(this.props.ip);
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>IP Address</TableCell>
              <TableCell align="right">DNS Name</TableCell>
              <TableCell align="right">Assignment Type</TableCell>
              <TableCell align="right">Lease State</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                  <TableCell component="th" scope="row">
                  {this.props.ip.addr}
                  </TableCell>
                  <TableCell align="right">{this.props.ip.dnsName}</TableCell>
                  <TableCell align="right">{this.props.ip.assignmentType}</TableCell>
                  <TableCell align="right">{this.props.ip.leaseInfo}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}