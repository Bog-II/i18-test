import {
  Delete,
  DriveFileRenameOutline,
  Link,
  MoreVert,
  OpenInNew,
} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import {
  GridActionsCellItem,
  GridActionsColDef,
  GridColDef,
  GridRenderCellParams,
  GridRowParams,
} from '@mui/x-data-grid-pro';

const actions: GridActionsColDef = {
  field: 'actions',
  type: 'actions',
  getActions: (params: GridRowParams) => {
    if (params.id <= 2) {
      return [];
    }

    return [
      <GridActionsCellItem
        icon={<Delete />}
        label="Supprimer"
        onClick={() => console.log('Delete')}
        showInMenu
      />,
      <GridActionsCellItem
        icon={<DriveFileRenameOutline />}
        onClick={() => console.log('TextFields')}
        label="Renommer"
        showInMenu
      />,
      <GridActionsCellItem
        icon={<Link />}
        onClick={() => console.log('Partager')}
        label="Partager"
        showInMenu
      />,
      <GridActionsCellItem
        icon={<OpenInNew />}
        onClick={() => console.log('Partager')}
        label="Ouvrir dans un nouvel onglet"
        showInMenu
      />,
    ];
  },
};

const getStringSize = (size: number) => {
  if (size < 1000) {
    return `${size} o`;
  }
  size = Math.ceil(size / 1000);
  if (size < 1000) {
    return `${size} Ko`;
  }
  size = Math.ceil(size / 1000);
  if (size < 1000) {
    return `${size} Mo`;
  }

  size = Math.ceil(size / 1000);
  return `${size} Go`;
};

export const columns: GridColDef[] = [
  {
    field: 'documentName',
    headerName: 'Document Name',
    flex: 1,
    sortable: true,
    align: 'center',
    headerAlign: 'center',
    type: 'string',
  },
  {
    field: 'documentCreator',
    headerName: 'Document Creator',
    sortable: true,
    flex: 1,
    align: 'center',
    headerAlign: 'center',
    type: 'string',
  },
  {
    field: 'creationTime',
    headerName: 'Creation Time',
    type: 'date',
    flex: 1,
    sortable: true,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'lastModificationTime',
    headerName: 'Last modification Time',
    type: 'date',
    flex: 1,
    sortable: true,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'documentSize',
    headerName: 'Size',
    type: 'number',
    flex: 1,
    sortable: true,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params: GridRenderCellParams) => {
      return getStringSize(params.row.documentSize);
    },
  },
  actions,
];
