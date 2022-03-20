import { Clear, Search } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React from 'react';

export const DocumentDataGridSearchBar = () => {
  return (
    <TextField
      id="standard-basic"
      fullWidth
      label="Recherche"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <Clear />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
