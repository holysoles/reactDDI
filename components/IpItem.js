import * as React from 'react';
import { IconButton } from '@mui/material';
import BlurOnSharpIcon from '@mui/icons-material/BlurOnSharp';
import Drawer from '@mui/material/Drawer';
import DisplayIpDetails from './DisplayIpDetails';

export default class IpItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {drawer: false};
    }

    IsTaken(entry){
        //TODO remove placeholder tests
        //make API query
        if(entry.dnsName.length){
            return true;
        }
        else { return false }
    }

    render(){
        const toggleDrawer = () => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
              return;
            }
            this.setState({drawer: !this.state.drawer});
          };


        var stateColor;
        if(this.IsTaken(this.props.ip)){
            stateColor = 'primary';
        }
        else{
            stateColor = 'disabled';
        }
      
        return (
          <div>
              <React.Fragment>
                  <IconButton onClick={toggleDrawer()}>
                      <BlurOnSharpIcon color={stateColor}/>
                  </IconButton>
                  <Drawer
                  anchor="bottom"
                  open={this.state.drawer}
                  onClose={toggleDrawer()}
                  >
                    <DisplayIpDetails ip={this.props.ip} />
                  </Drawer>
              </React.Fragment>
          </div>
        );
    }
}