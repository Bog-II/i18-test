import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

export default function ButtonAppBar() {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        <Box sx={{ display: 'flex', columnGap: '40px' }}>
          <Box sx={{ display: 'flex', columnGap: '10px' }}>
            <Button variant="outlined" color="inherit">
              Login
            </Button>
            <Button variant="contained" color="primary">
              Logout
            </Button>
          </Box>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>H</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
