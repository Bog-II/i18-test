import { Close } from '@mui/icons-material';
import { Button, IconButton, Snackbar } from '@mui/material';
import React, { useState } from 'react';

export const DocumentDataGridCellSnackBar = () => {
  const [openSnackBar, setOpenSnackBar] = useState(true);

  const handleCloseSnackBar = () => {
    console.log('handleCloseSnackBar');
  };

  const action = (
    <>
      <Button color="primary" size="small" onClick={handleCloseSnackBar}>
        ANNULER
      </Button>
      <IconButton
        size="small"
        color="inherit"
        onClick={() => setOpenSnackBar(false)}
      >
        <Close />
      </IconButton>
    </>
  );

  return (
    <>
      {' '}
      {/* SnackbarProvider - queue
  https://mui.com/components/snackbars/
*/}
      <Snackbar
        open={openSnackBar}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={() => setOpenSnackBar(false)}
        message="Supprimer le document"
        action={action}
      />
    </>
  );
};
