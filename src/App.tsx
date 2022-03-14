import ButtonAppBar from './components/ButtonAppBar';
import { DocumentDataGridCellSnackBar } from './components/DocumentsDataGridCellSnackBar';
import { DocumentsDataGrid } from './components/DocumentsDataGrid';
import { DocumentsDataGridCellMenu } from './components/DocumentsDataGridCellMenu';
import { DocumentsDataGridSpeedDial } from './components/DocumentsDataGridSpeedDial';

function App() {
  return (
    <>
      <ButtonAppBar />
      <DocumentsDataGrid />

      <DocumentsDataGridCellMenu />

      <DocumentDataGridCellSnackBar />
      <DocumentsDataGridSpeedDial />
    </>
  );
}

export default App;
