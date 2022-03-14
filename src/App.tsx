import ButtonAppBar from './components/ButtonAppBar';
import { DocumentDataGridCellSnackBar } from './components/DocumentsDataGridCellSnackBar';
import { DocumentsDataGrid } from './components/DocumentsDataGrid';
import { DocumentsDataGridCellMenu } from './components/DocumentsDataGridCellMenu';
import { DocumentsDataGridSpeedDial } from './components/DocumentsDataGridSpeedDial';

import './App.css';

function App() {
  return (
    <>
      <ButtonAppBar />
      <DocumentsDataGridCellMenu />
      <DocumentsDataGrid />

      <DocumentDataGridCellSnackBar />
      <DocumentsDataGridSpeedDial />
    </>
  );
}

export default App;
