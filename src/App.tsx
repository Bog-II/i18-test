import ButtonAppBar from './components/ButtonAppBar';
import { DocumentDataGridCellSnackBar } from './components/DocumentsDataGridCellSnackBar';
import { DocumentsDataGrid } from './components/DocumentsDataGrid';
import { DocumentsDataGridSpeedDial } from './components/DocumentsDataGridSpeedDial';

import './App.css';

function App() {
  return (
    <>
      <ButtonAppBar />
      <DocumentsDataGrid />

      <DocumentDataGridCellSnackBar />
      <DocumentsDataGridSpeedDial />
    </>
  );
}

export default App;
