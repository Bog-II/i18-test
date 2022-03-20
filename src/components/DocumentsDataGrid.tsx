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
import { DocumentsDataGridContext } from './contexts/DocumentDataGridContext';
import { columns } from './DocumentsDataGridColumns';
import { CustomToolbar } from './DocumentsDataGridToolbar';
import { DocumentInterface } from '../interfaces/DocumentInterface';

export const DocumentsDataGrid = () => {
  const [searchBarValue, setSearchBarValue] = useState('');
  const [fileredDocuments, setFileredDocuments] = useState<DocumentInterface[]>(
    []
  );

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
        <DocumentsDataGridContext.Provider
          value={{
            searchBarValue: searchBarValue,
            setSearchBarValue: setSearchBarValue,
          }}
        >
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
            density="standard"
          />
        </DocumentsDataGridContext.Provider>
      </Container>
    </>
  );
};
