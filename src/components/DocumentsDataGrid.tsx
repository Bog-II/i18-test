import { Container } from '@mui/material';
import {
  DataGridPro,
  GridCallbackDetails,
  GridDensity,
  GridRowParams,
  GRID_DEFAULT_LOCALE_TEXT,
  MuiEvent,
} from '@mui/x-data-grid-pro';
import React, { useState } from 'react';
import { rows } from '../data/rowsDocumentsDataGrid';
import { columns } from './columnsDocumentDataGrid';
import { CustomToolbar } from './CustomToolbar';

export const DocumentsDataGrid = () => {
  const [gridDensity, setGridDensity] = useState<GridDensity>('compact');

  const handleRowClick = (
    params: GridRowParams,
    event: MuiEvent<React.MouseEvent>,
    details: GridCallbackDetails
  ) => {
    console.log(params);
    console.log(event);
    console.log(details);
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
    </>
  );
};
