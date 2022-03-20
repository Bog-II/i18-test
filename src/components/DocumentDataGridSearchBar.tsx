import { Clear, Search } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';

export const DocumentDataGridSearchBar = () => {
  const [searchBarValue, setSearchBarValue] = useState('');

  const onValueClear = () => {
    setSearchBarValue('');
  };

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBarValue(event.target.value);
  };

  return (
    <TextField
      id="standard-basic"
      fullWidth
      label="Recherche"
      value={searchBarValue}
      onChange={onValueChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={onValueClear}>
              <Clear />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
