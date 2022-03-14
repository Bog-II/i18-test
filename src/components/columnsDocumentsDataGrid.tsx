import { MoreVert } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid-pro';

export const columns: GridColDef[] = [
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
