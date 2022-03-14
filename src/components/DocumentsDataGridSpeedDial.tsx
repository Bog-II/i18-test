import { Edit } from '@mui/icons-material';
import { SpeedDial, SpeedDialIcon } from '@mui/material';
import React from 'react';

export const DocumentsDataGridSpeedDial = () => {
  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'fixed', bottom: '10%', right: '10%' }}
        icon={<SpeedDialIcon openIcon={<Edit />} />}
        onClick={() => console.log('handleSpeedDialClick')}
      ></SpeedDial>
    </>
  );
};
