import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IconButton, Tooltip } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { ThemeModeButton } from './ThemeModeButton';
import { ChangeLanguageSelect } from './ChangeLanguageSelect';
import { useTranslation } from 'react-i18next';

export default function ButtonAppBar() {
  const { t, i18n } = useTranslation();

  return (
    <AppBar position="static" color="inherit">
      <Toolbar
        variant="regular"
        sx={{ display: 'flex', columnGap: 2, alignItems: 'center' }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>

        <ThemeModeButton />
        <ChangeLanguageSelect />

        <Box sx={{ display: 'flex', columnGap: 1 }}>
          <Button variant="outlined" size="medium">
            {t('appbar.signin')}
          </Button>

          <Button variant="contained" size="medium">
            {t('appbar.signup')}
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
