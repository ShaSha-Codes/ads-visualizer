import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  

  return (
    <AppBar position="static">
    
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ paddingLeft:"20px",mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
              
            <AccountTreeIcon sx={{marginRight:"10px"}}fontSize="large"/>
            ADS Visualizer
          </Typography>

        

        </Toolbar>
    
    </AppBar>
  );
};
export default ResponsiveAppBar;
