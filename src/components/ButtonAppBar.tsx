import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, IconButton, Stack, Tooltip } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

export default function ButtonAppBar() {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar variant="regular" sx={{ display: 'flex', columnGap: 2 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>

        <Box sx={{ display: 'flex', columnGap: 1 }}>
          <Button variant="outlined" color="inherit" size="medium">
            Login
          </Button>

          <Button variant="contained" color="primary" size="medium">
            Logout
          </Button>
        </Box>

        <Tooltip title="Profile">
          <IconButton size="small">
            <Avatar sx={{ bgcolor: deepPurple[500] }}>H</Avatar>
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
