import { Clear, Search } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { DocumentsDataGridContext } from './contexts/DocumentDataGridContext';

export const DocumentDataGridSearchBar = () => {
  const documentContext = useContext(DocumentsDataGridContext);

  const onValueClear = () => {
    documentContext.setSearchBarValue('');
  };

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    documentContext.setSearchBarValue(event.target.value);
  };

  console.log('rerendering search bar');

  return (
    <TextField
      id="standard-basic"
      fullWidth
      label="Recherche"
      value={documentContext.searchBarValue}
      onChange={onValueChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {documentContext.searchBarValue != '' ? (
              <IconButton onClick={onValueClear}>
                <Clear />
              </IconButton>
            ) : null}
          </InputAdornment>
        ),
      }}
    />
  );
};
