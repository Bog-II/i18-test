import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IconButton, Tooltip } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { ThemeModeButton } from './ThemeModeButton';

export default function ButtonAppBar() {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar variant="regular" sx={{ display: 'flex', columnGap: 2 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>

        <ThemeModeButton />

        <Box sx={{ display: 'flex', columnGap: 1 }}>
          <Button variant="outlined" size="medium">
            Log in
          </Button>

          <Button variant="contained" size="medium">
            Log out
          </Button>
        </Box>

        <Tooltip title="Profile">
          <IconButton>
            <AccountCircle fontSize="large" />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
