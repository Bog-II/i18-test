import ButtonAppBar from './components/ButtonAppBar';
import { DocumentDataGridCellSnackBar } from './components/DocumentsDataGridCellSnackBar';
import { DocumentsDataGrid } from './components/DocumentsDataGrid';
import { DocumentsDataGridSpeedDial } from './components/DocumentsDataGridSpeedDial';

import './App.css';
import {
  createTheme,
  PaletteMode,
  ThemeProvider,
} from '@mui/material';
import { ThemeModeContext } from './contexts/ThemeModeContext';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState<PaletteMode>('dark');

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
          <ButtonAppBar />

          <DocumentsDataGrid />

          <DocumentDataGridCellSnackBar />
          <DocumentsDataGridSpeedDial />
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </>
  );
}

export default App;
