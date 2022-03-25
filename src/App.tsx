import ButtonAppBar from './components/ButtonAppBar';
import { DocumentDataGridCellSnackBar } from './components/DocumentsDataGridCellSnackBar';
import { DocumentsDataGrid } from './components/DocumentsDataGrid';
import { DocumentsDataGridSpeedDial } from './components/DocumentsDataGridSpeedDial';

import './App.css';
import {
  Button,
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from '@mui/material';
import { ThemeModeContext } from './contexts/ThemeModeContext';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const [mode, setMode] = useState<PaletteMode>('dark');
  const { t, i18n } = useTranslation();

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  const theme = mode === 'dark' ? darkTheme : lightTheme;

  return (
    <>
      <ThemeModeContext.Provider
        value={{
          themeMode: mode,
          setThemeMode: setMode,
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ButtonAppBar />

          <DocumentsDataGrid />

          {t('a')}

          <DocumentDataGridCellSnackBar />
          <DocumentsDataGridSpeedDial />
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </>
  );
}

export default App;
