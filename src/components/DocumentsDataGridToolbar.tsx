import { Box, TextField } from '@mui/material';
import {
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from '@mui/x-data-grid-pro';
import React from 'react';

export const CustomToolbar = () => {
  return (
    <GridToolbarContainer
      style={{
        display: 'flex',
        alignItems: 'center',
        columnGap: 'max(2%, 1em)',
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

      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
};
