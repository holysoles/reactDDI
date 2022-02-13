import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Tooltip } from '@mui/material';
import IpItem from './IpItem';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SubnetGrid() {
  var subnet = '192.168.1.';
  let subnetIps = new Array();
 for(var i=1;i<=255;i++){
   var newIp = {'addr':'','dnsName':'','assignmentType':'','leaseInfo':''};
   newIp.addr = subnet+i; 
   subnetIps.push(newIp);
 }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 1, md: 2 }}>
      {subnetIps.map((ip, index) => (
        <Tooltip title={ip.addr} key={ip.addr} arrow>
          <Grid item xs={1} sm={1} md={1} key={index}>
            <IpItem ip={ip} />
          </Grid>
        </Tooltip>
      ))}
      </Grid>
    </Box>
  );
}