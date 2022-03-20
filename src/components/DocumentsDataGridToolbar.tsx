import { Clear, Search } from '@mui/icons-material';
import { Box, IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import {
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid-pro';

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
          width: '90%',
          display: 'flex',
          alignItems: 'bottom',
          justifyContent: 'space-between',
        }}
      >
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
      </Box>

      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
};
