import { Close, Edit, MoreVert } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  IconButton,
  Snackbar,
  SpeedDial,
  SpeedDialIcon,
  TextField,
} from '@mui/material';
import {
  DataGridPro,
  GridCallbackDetails,
  GridColDef,
  GridDensity,
  GridRenderCellParams,
  GridRowParams,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  MuiEvent,
} from '@mui/x-data-grid-pro';
import { useState } from 'react';
import { DocumentsDataGrid } from './components/DocumentsDataGrid';

function App() {
  const [openSnackBar, setOpenSnackBar] = useState(true);

  const handleCloseSnackBar = () => {
    console.log('handleCloseSnackBar');
  };

  const action = (
    <>
      <Button color="primary" size="small" onClick={handleCloseSnackBar}>
        ANNULER
      </Button>
      <IconButton
        size="small"
        color="inherit"
        onClick={() => setOpenSnackBar(false)}
      >
        <Close />
      </IconButton>
    </>
  );

  return (
    <>
      <Container>
        <DocumentsDataGrid />
      </Container>



      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'fixed', bottom: '10%', right: '10%' }}
        icon={<SpeedDialIcon openIcon={<Edit />} />}
        onClick={() => console.log('handleSpeedDialClick')}
      ></SpeedDial>
    </>
  );
}

export default App;
