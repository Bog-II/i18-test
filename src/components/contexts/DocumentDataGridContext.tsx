import { GridDensity } from '@mui/x-data-grid-pro';
import React from 'react';

interface DocumentsDataGridContext {
  searchBarValue: string;
  setSearchBarValue: React.Dispatch<React.SetStateAction<string>>;
  gridDensity: string;
  setGridDensity: React.Dispatch<React.SetStateAction<GridDensity>>;
}

export const DocumentsDataGridContext =
  React.createContext<DocumentsDataGridContext>({
    searchBarValue: '',
    setSearchBarValue: () => {},
    gridDensity: '',
    setGridDensity: () => {},
  });
