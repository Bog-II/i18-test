import { Clear, Search } from '@mui/icons-material';
import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from '@mui/material';
import {
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid-pro';
import { DocumentDataGridSearchBar } from './DocumentDataGridSearchBar';

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
        <DocumentDataGridSearchBar />
      </Box>

      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
};
