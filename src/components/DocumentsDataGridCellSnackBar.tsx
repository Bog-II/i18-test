import { Close } from '@mui/icons-material';
import { Button, IconButton, Snackbar } from '@mui/material';
import React, { SyntheticEvent, useState } from 'react';

export const DocumentDataGridCellSnackBar = () => {
  const [openSnackBar, setOpenSnackBar] = useState(true);

  const handleCloseSnackBar = () => {
    console.log('handleCloseSnackBar');
  };

  const handleOnClose = (
    event: SyntheticEvent<any> | Event,
    reason: string
  ) => {
    if (reason === 'autoHideDuration') {
      setOpenSnackBar(false);
    }
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
        onClose={handleOnClose}
        message="Supprimer le document"
        action={action}
      />
    </>
  );
};
