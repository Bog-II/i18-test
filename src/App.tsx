import { Close, Create, Edit, MoreVert } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Fab,
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

function App() {
  const [gridDensity, setGridDensity] = useState<GridDensity>('compact');
  const [openSnackBar, setOpenSnackBar] = useState(true);

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer
        style={{
          display: 'flex',
          alignItems: 'center',
          columnGap: '2%',
          padding: '2% 3%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            width: '80%',
            display: 'flex',
            alignItems: 'bottom',
            justifyContent: 'space-between',
          }}
        >
          <TextField
            id="standard-basic"
            fullWidth
            label="Recherche"
            variant="standard"
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            columnGap: '5%',
            justifyContent: 'space-between',
          }}
        >
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </Box>
      </GridToolbarContainer>
    );
  };

  const columns: GridColDef[] = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      flex: 1,
      sortable: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      sortable: true,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      flex: 1,
      sortable: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'Print',
      headerName: 'Buttons',
      renderCell: (params: GridRenderCellParams) => {
        return (
          <IconButton>
            <MoreVert />
          </IconButton>
        );
      },
      flex: 0.5,
      sortable: false,
      align: 'center',
      headerAlign: 'center',
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: 'test', age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 16, lastName: 'Melisandre', firstName: 'Monkeytype', age: 150 },
    { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 20, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 21, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 22, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 23, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 24, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 25, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 26, lastName: 'Melisandre', firstName: 'Rossini', age: 150 },
    { id: 27, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 28, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 29, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 30, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const handleRowClick = (
    params: GridRowParams,
    event: MuiEvent<React.MouseEvent>,
    details: GridCallbackDetails
  ) => {
    console.log(params);
    console.log(event);
    console.log(details);
  };

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

  const GRID_DEFAULT_LOCALE_TEXT = {
    // Filters button
    toolbarFilters: 'Filtrer',

    // Density button
    toolbarDensity: 'Densité',
    toolbarDensityLabel: 'Densité',
    toolbarDensityCompact: 'Faible',
    toolbarDensityStandard: 'Moyenne',
    toolbarDensityComfortable: 'Élevée',

    // Export button
    toolbarExport: 'Exporter',
    toolbarExportCSV: 'Télécharger en CSV',
    toolbarExportPrint: 'Imprimer',
  };

  return (
    <>
      <Container>
        <DataGridPro
          rows={rows}
          columns={columns}
          localeText={GRID_DEFAULT_LOCALE_TEXT}
          components={{
            Toolbar: CustomToolbar,
          }}
          pageSize={5}
          autoHeight={true}
          disableColumnPinning
          disableColumnMenu
          disableColumnResize
          onRowClick={handleRowClick}
          hideFooter
          density={gridDensity}
        />
      </Container>

      {/* SnackbarProvider - queue
        https://mui.com/components/snackbars/
      */}
      <Snackbar
        open={openSnackBar}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={() => setOpenSnackBar(false)}
        message="Supprimer le document"
        action={action}
      />

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
