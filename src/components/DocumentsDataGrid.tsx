import { Container } from '@mui/material';
import {
  DataGridPro,
  GridCallbackDetails,
  GridRowParams,
  GRID_DEFAULT_LOCALE_TEXT,
  MuiEvent,
} from '@mui/x-data-grid-pro';
import React, { useEffect, useState } from 'react';
import { documents } from '../data/documentsDataGrid';
import { DocumentsDataGridContext } from './contexts/DocumentDataGridContext';
import { columns } from './DocumentsDataGridColumns';
import { CustomToolbar } from './DocumentsDataGridToolbar';
import { DocumentInterface } from '../interfaces/DocumentInterface';
import { getDateString, getSizeString, getTimeString } from '../utils/Document';

export const DocumentsDataGrid = () => {
  const [searchBarValue, setSearchBarValue] = useState<string>('');
  const [fileredDocuments, setFileredDocuments] = useState<DocumentInterface[]>(
    [...documents]
  );

  useEffect(() => {
    if (searchBarValue == '') {
      setFileredDocuments([...documents]);
    } else {
      const filteredDocuments = documents.filter((document) => {
        const line =
          document.documentName.toLowerCase() +
          getDateString(document.creationDate).toLowerCase() +
          getTimeString(document.lastModificationTime).toLowerCase() +
          getSizeString(document.documentSize).toLowerCase();

        return line.includes(searchBarValue.toLowerCase());
      });

      setFileredDocuments(filteredDocuments);
      // document.name.toLowerCase().indexOf(searchBarValue.toLowerCase()) !=

      // setFileredDocuments(filteredDocuments);
    }
  }, [searchBarValue]);

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
            rows={fileredDocuments}
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
